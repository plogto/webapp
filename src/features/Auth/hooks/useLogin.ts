import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import { PageUrls } from "@enums/pages";
import type { LoginQuery } from "@graphql/@types/auth";
import { LOGIN } from "@graphql/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@hooks/useAuth";
import type { LoginForm } from "../Auth.types";
import { useGoogle } from "./useGoogle";

export function useLogin() {
  const { oAuthGoogleLoading } = useGoogle();
  const { handleToken } = useAuth();
  const { push } = useRouter();
  const { t } = useTranslation("auth");
  const validationSchema = Yup.object().shape({
    username: Yup.string().required(t("errors.usernameIsRequired")),
    password: Yup.string().required(t("errors.passwordIsRequired")),
  });

  const formMethods = useForm<LoginForm>({
    mode: "all",
    resolver: yupResolver(validationSchema),
  });
  const [login, { error, loading: loginLoading }] =
    useLazyQuery<LoginQuery>(LOGIN);

  const onSubmit = (variables: LoginForm) => {
    login({ variables }).then(({ data }) => {
      if (data?.login) {
        const {
          authToken: { token },
        } = data.login;
        token && handleToken(token);
        push(PageUrls.HOME);
      }
    });
  };

  const loading = useMemo(
    () => loginLoading || oAuthGoogleLoading,
    [loginLoading, oAuthGoogleLoading],
  );

  return { formMethods, onSubmit, error, loading };
}
