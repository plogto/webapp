import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { useLazyQuery } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import type { LoginQuery } from "@graphql/@types/auth";
import { LOGIN } from "@graphql/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import type { LoginForm } from "../Auth.types";
import { useRouter } from "next/router";

export function useLogin() {
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
  const [login, { error, loading, data }] = useLazyQuery<LoginQuery>(LOGIN);
  const { setIsAuthenticated, setToken, setUser } = useAccountContext();

  useEffect(() => {
    if (data?.login) {
      const {
        authToken: { token },
        user,
      } = data.login;
      localStorage.setItem("authorization", token);
      setToken(token);
      setUser(user);
      setIsAuthenticated(true);
      push(PageUrls.HOME);
    }
  }, [data, setToken, setUser, setIsAuthenticated]);

  const onSubmit = (variables: LoginForm) => {
    login({ variables });
  };

  return { formMethods, onSubmit, error, loading };
}
