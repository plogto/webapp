import { useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useLazyQuery } from "@apollo/client";
import type { CheckEmailQuery } from "@graphql/@types/user";
import { CHECK_EMAIL } from "@graphql/user";
import type { UseEditUserValidations } from "../EditProfile.types";

export function useEditUserValidations(props: UseEditUserValidations) {
  const { setError, clearErrors } = props;
  const { t } = useTranslation("editProfile");

  const [checkEmailRequest, checkEmailResponse] = useLazyQuery<CheckEmailQuery>(
    CHECK_EMAIL,
    {
      fetchPolicy: "no-cache",
    },
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
    if (checkEmailResponse.data?.checkEmail) {
      setError("email", {
        message: t("errors.emailIsAlreadyTaken"),
      });
    } else {
      clearErrors("email");
    }
  }, [checkEmailResponse.data, clearErrors, setError, t]);

  return {
    checkEmail,
    checkEmailResponse,
  };
}
