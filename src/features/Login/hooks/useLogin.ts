import { useLazyQuery } from "@apollo/client";
import router from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAccountContext } from "@context/AccountContext";
import { PageUrls } from "@enums/pages";

import { LOGIN } from "@graphql/auth";
import type { LoginForm } from "../@types";
import type { LoginQuery } from "@graphql/@types/auth";

export function useLogin() {
  const formMethods = useForm<LoginForm>({ mode: "all" });
  const [login, { error, loading, data }] = useLazyQuery<LoginQuery>(LOGIN);
  const { setIsAutheticated, setToken, setUser } = useAccountContext();

  useEffect(() => {
    if (data) {
      const {
        authToken: { token },
        user,
      } = data.login;
      localStorage.setItem("Authorization", token);
      setToken(token);
      setUser(user);
      setIsAutheticated(true);
      router.push(PageUrls.HOME);
    }
  }, [data, setToken, setUser, setIsAutheticated]);

  const submit = (variables: LoginForm) => {
    login({ variables });
  };

  return { formMethods, submit, error, loading };
}
