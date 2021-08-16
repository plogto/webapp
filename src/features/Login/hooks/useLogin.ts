import { useEffect } from "react";
import router from "next/router";
import { useForm } from "react-hook-form";
import { LOGIN } from "@/graphql/auth";
import { useLazyQuery } from "@apollo/client";
import type { LoginForm } from "../@types";
import { PageUrls } from "@/@enums/pages";
import { useAccount } from "@/context/AccountContext";

export function useLogin() {
  const formMethods = useForm<LoginForm>({ mode: "all" });
  const [login, { error, loading, data }] = useLazyQuery(LOGIN);
  const { setToken, setIsAutheticated } = useAccount();

  useEffect(() => {
    if (data) {
      const { token } = data.login.authToken;
      localStorage.setItem("Authorization", token);
      setToken(token);
      setIsAutheticated(true);
      router.push(PageUrls.HOME);
    }
  }, [data]);

  const submit = (variables: LoginForm) => {
    login({ variables });
  };

  return { formMethods, submit, error, loading };
}
