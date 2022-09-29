import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import type { EditUserMutation } from "@graphql/@types/user";
import { EDIT_USER, GET_USER_INFO } from "@graphql/user";
import { useNavigator } from "@hooks/useNavigator";
import type { SettingsForm } from "../EditProfile.types";

export function useEditProfile() {
  const { user } = useAccountContext();
  const { formatProfilePageRoute } = useNavigator();
  const { push } = useRouter();
  const formMethods = useForm<SettingsForm>({
    mode: "all",
  });

  const { reset } = formMethods;

  useEffect(() => {
    // TODO: create preparedUser function
    reset({
      username: user?.username,
      avatar: user?.avatar?.id,
      background: user?.background?.id,
      fullName: user?.fullName,
      email: user?.email,
      bio: user?.bio,
      isPrivate: user?.isPrivate,
    });
  }, [reset, user]);

  const [editUser, { loading }] = useMutation<EditUserMutation>(EDIT_USER);

  const onSubmit = useCallback(
    (settingsFormData: SettingsForm) => {
      if (user) {
        editUser({
          variables: { ...settingsFormData },
          refetchQueries: [{ query: GET_USER_INFO }],
        });
        push(formatProfilePageRoute(user?.username));
      }
    },
    [editUser, formatProfilePageRoute, push, user],
  );

  return { formMethods, user, onSubmit, loading };
}
