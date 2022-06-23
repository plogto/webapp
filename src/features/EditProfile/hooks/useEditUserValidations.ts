import { useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useLazyQuery } from "@apollo/client";
import type { CheckEmailQuery, CheckUsernameQuery } from "@graphql/@types/user";
import { CHECK_EMAIL, CHECK_USERNAME } from "@graphql/user";
import type { UseEditUserValidations } from "../EditProfile.types";

export function useEditUserValidations(props: UseEditUserValidations) {
  const { setError, clearErrors } = props;
  const { t } = useTranslation("editProfile");
  const [checkUsernameRequest, checkUsernameResponse] =
    useLazyQuery<CheckUsernameQuery>(CHECK_USERNAME, {
      fetchPolicy: "no-cache",
    });
  const [checkEmailRequest, checkEmailResponse] = useLazyQuery<CheckEmailQuery>(
    CHECK_EMAIL,
    {
      fetchPolicy: "no-cache",
    },
  );

  const checkUsername = useCallback(
    (username: string) => {
      checkUsernameRequest({
        variables: { username },
      });
    },
    [checkUsernameRequest],
  );

  const checkEmail = useCallback(
    (email: string) => {
      checkEmailRequest({
        variables: { email },
      });
    },
    [checkEmailRequest],
  );

  useEffect(() => {
    if (checkUsernameResponse.data?.checkUsername) {
      setError("username", {
        message: t("errors.usernameIsAlreadyTaken"),
      });
    } else {
      clearErrors("username");
    }
  }, [checkUsernameResponse.data, clearErrors, setError, t]);

  useEffect(() => {
    if (checkEmailResponse.data?.checkEmail) {
      setError("email", {
        message: t("errors.emailIsAlreadyTaken"),
      });
    } else {
      clearErrors("email");
    }
  }, [checkEmailResponse.data, clearErrors, setError, t]);

  return {
    checkUsername,
    checkEmail,
    checkUsernameResponse,
    checkEmailResponse,
  };
}
