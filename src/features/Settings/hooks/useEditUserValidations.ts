import { useLazyQuery } from "@apollo/client";
import { useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { UseEditUserValidations } from "../@types";
import { CheckEmailQuery, CheckUsernameQuery } from "@graphql/@types/user";
import { CHECK_EMAIL, CHECK_USERNAME } from "@graphql/user";

export function useEditUserValidations(props: UseEditUserValidations) {
  const { setError, clearErrors } = props;
  const { t } = useTranslation("settings");
  const [checkUsernameRequest, checkUsernameResponse] =
    useLazyQuery<CheckUsernameQuery>(CHECK_USERNAME);
  const [checkEmailRequest, checkEmailResponse] =
    useLazyQuery<CheckEmailQuery>(CHECK_EMAIL);

  const checkUsername = useCallback((username: string) => {
    checkUsernameRequest({
      variables: { username },
    });
  }, []);

  const checkEmail = useCallback((email: string) => {
    checkEmailRequest({
      variables: { email },
    });
  }, []);

  useEffect(() => {
    if (checkUsernameResponse.data?.checkUsername) {
      setError("username", {
        message: t("errors.usernameIsAlreadyTaken"),
      });
    } else {
      clearErrors("username");
    }
  }, [checkUsernameResponse]);

  useEffect(() => {
    if (checkEmailResponse.data?.checkEmail) {
      setError("email", {
        message: t("errors.emailIsAlreadyTaken"),
      });
    } else {
      clearErrors("email");
    }
  }, [checkEmailResponse]);

  return { checkUsername, checkEmail };
}
