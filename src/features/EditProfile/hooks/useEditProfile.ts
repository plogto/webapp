import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useAccountContext } from "@contexts/AccountContext";
import { EDIT_USER } from "@graphql/user";
import { useNavigation } from "@hooks/useNavigation";
import type { SettingsForm } from "../@types";
import type { EditUserMutation } from "@graphql/@types/user";

export function useEditProfile() {
  const { user } = useAccountContext();
  const { formatProfilePageRoute } = useNavigation();
  const { push } = useRouter();
  const formMethods = useForm<SettingsForm>({
    mode: "all",
    defaultValues: {
      username: user?.username,
      avatar: user?.avatar,
      background: user?.background,
      fullName: user?.fullName,
      email: user?.email,
      bio: user?.bio,
      isPrivate: user?.isPrivate,
    },
  });

  const [editUser, { loading }] = useMutation<EditUserMutation>(EDIT_USER);

  const onSubmit = useCallback(
    (settingsFormData: SettingsForm) => {
      if (user) {
        editUser({
          variables: { ...settingsFormData },
        });
        push(formatProfilePageRoute(user?.username));
      }
    },
    [editUser, formatProfilePageRoute, push, user],
  );

  return { formMethods, user, onSubmit, loading };
}
