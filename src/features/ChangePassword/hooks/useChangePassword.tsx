import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import type { ChangePasswordMutation } from "@graphql/@types/user";
import { CHANGE_PASSWORD } from "@graphql/user";
import { yupResolver } from "@hookform/resolvers/yup";
import type { ChangePasswordForm } from "../@types";

export function useChangePassword() {
  const { t } = useTranslation("changePassword");
  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string()
      .required(t("errors.oldPasswordRequired"))
      .min(8, t("errors.minLength")),
    newPassword: Yup.string()
      .required(t("errors.newPasswordRequired"))
      .min(8, t("errors.minLength")),
    confirmPassword: Yup.string()
      .required(t("errors.confirmPasswordRequired"))
      .oneOf([Yup.ref("newPassword")], t("errors.doesNotMatch")),
  });

  const [changePassword] = useMutation<ChangePasswordMutation>(CHANGE_PASSWORD);

  const { user } = useAccountContext();
  const formMethods = useForm<ChangePasswordForm>({
    mode: "all",
    resolver: yupResolver(validationSchema),
  });

  // TODO: handle response
  const onSubmit = useCallback(
    (data: ChangePasswordForm) => {
      const { oldPassword, newPassword } = data;
      if (oldPassword) {
        changePassword({ variables: { oldPassword, newPassword } });
      }
    },
    [changePassword],
  );

  return { formMethods, user, onSubmit };
}
