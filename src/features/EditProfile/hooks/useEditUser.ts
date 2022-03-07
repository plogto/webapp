import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import { SettingsForm, UseEditUser } from "../@types";
import { EditUserMutation } from "@graphql/@types/user";
import { EDIT_USER } from "@graphql/user";
import { useNavigation } from "@hooks/useNavigation";

export function useEditUser(props: UseEditUser) {
  const { user } = props;
  const router = useRouter();
  const { formatProfilePageRoute } = useNavigation();

  const [editUserRequest, editUserResponse] =
    useMutation<EditUserMutation>(EDIT_USER);

  const editUser = useCallback((settingsFormData: SettingsForm) => {
    editUserRequest({
      variables: { ...settingsFormData },
    });
  }, []);

  useEffect(() => {
    if (editUserResponse.data && user) {
      router.push(formatProfilePageRoute(user.username));
    }
  }, [editUserResponse.data]);

  return { editUser, editUserResponse };
}
