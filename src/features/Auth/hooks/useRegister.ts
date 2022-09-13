import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { LocalStorageKeys } from "@enums";
import { useMutation } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import type { RegisterMutation } from "@graphql/@types/auth";
import { REGISTER } from "@graphql/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import type { RegisterForm } from "../Auth.types";
import { useGoogle } from "./useGoogle";
import { useInvitation } from "./useInvitation";

export function useRegister() {
  const { oAuthGoogleLoading } = useGoogle();
  const { invitationCode } = useInvitation();
  const { push } = useRouter();
  const { t } = useTranslation("auth");
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required(t("errors.fullNameIsRequired")),
    email: Yup.string()
      .required(t("errors.emailIsRequired"))
      .email(t("errors.emailIsNotValid")),
    password: Yup.string()
      .required(t("errors.passwordIsRequired"))
      .min(8, t("errors.passwordMinLength")),
  });

  const formMethods = useForm<RegisterForm>({
    mode: "all",
    resolver: yupResolver(validationSchema),
  });
  const [register, { error, loading: registerLoading, data }] =
    useMutation<RegisterMutation>(REGISTER);
  const { setIsAuthenticated, setToken, setUser } = useAccountContext();

  useEffect(() => {
    if (data?.register) {
      const {
        authToken: { token },
        user,
      } = data.register;
      localStorage.setItem(LocalStorageKeys.AUTHORIZATION, token);
      localStorage.removeItem(LocalStorageKeys.INVITATION_CODE);
      setToken(token);
      setUser(user);
      setIsAuthenticated(true);
      push(PageUrls.HOME);
    }
  }, [data, setToken, setUser, setIsAuthenticated]);

  const onSubmit = (variables: RegisterForm) => {
    register({
      variables: {
        ...variables,
        invitationCode,
      },
    });
  };

  const loading = useMemo(
    () => registerLoading || oAuthGoogleLoading,
    [oAuthGoogleLoading, registerLoading],
  );

  return { formMethods, onSubmit, error, loading };
}
