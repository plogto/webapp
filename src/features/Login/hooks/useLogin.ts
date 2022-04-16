import { useLazyQuery } from "@apollo/client";
import router from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";

import { LOGIN } from "@graphql/auth";
import type { LoginForm } from "../@types";
import type { LoginQuery } from "@graphql/@types/auth";

export function useLogin() {
  const formMethods = useForm<LoginForm>({ mode: "all" });
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
      router.push(PageUrls.HOME);
    }
  }, [data, setToken, setUser, setIsAuthenticated]);

  const onSubmit = (variables: LoginForm) => {
    login({ variables });
  };

  return { formMethods, onSubmit, error, loading };
}
