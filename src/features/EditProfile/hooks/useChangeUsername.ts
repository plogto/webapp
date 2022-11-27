import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { USERNAME_PATTERN } from "@constants";
import { useDebouncedCallback } from "use-debounce";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import type {
  CheckUsernameQuery,
  EditUserMutation,
} from "@graphql/@types/user";
import { CHECK_USERNAME, EDIT_USER } from "@graphql/user";
import type {
  ChangeUsernameForm,
  UseChangeUsernameProps,
} from "../EditProfile.types";

export function useChangeUsername(props: UseChangeUsernameProps) {
  const { closeModal } = props;
  const { user, setUser } = useAccountContext();
  const [checkUsernameRequest] = useLazyQuery<CheckUsernameQuery>(
    CHECK_USERNAME,
    {
      fetchPolicy: "no-cache",
    },
  );

  const [editUser] = useMutation<EditUserMutation>(EDIT_USER);

  const { t } = useTranslation("editProfile");
  const formMethods = useForm<ChangeUsernameForm>({
    mode: "all",
  });

  const { setError, clearErrors } = formMethods;

  const checkUsername = useDebouncedCallback(
    useCallback(
      (username: string) => {
        if (
          username.length > 4 &&
          username.match(USERNAME_PATTERN) &&
          username !== user?.username
        ) {
          checkUsernameRequest({
            variables: { username },
          }).then(({ data }) => {
            if (data?.checkUsername) {
              setError("username", {
                message: t("errors.usernameIsAlreadyTaken"),
              });
            } else {
              clearErrors("username");
            }
          });
        }
      },
      [checkUsernameRequest, clearErrors, setError, t, user?.username],
    ),
    500,
  );

  const onSubmit = useCallback(
    (formData: ChangeUsernameForm) => {
      closeModal();
      editUser({
        variables: { ...formData },
      }).then(({ data }) => {
        if (data?.editUser) {
          setUser(data?.editUser);
          // TODO: make a toast
        }
      });
    },
    [closeModal, editUser, setUser],
  );

  return {
    checkUsername,
    formMethods,
    onSubmit,
  };
}
