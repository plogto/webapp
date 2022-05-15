import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLazyQuery } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import type { LoginQuery } from "@graphql/@types/auth";
import { LOGIN } from "@graphql/auth";
import type { LoginForm } from "../@types";
import { useRouter } from "next/router";

export function useLogin() {
  const { push } = useRouter();
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
      push(PageUrls.HOME);
    }
  }, [data, setToken, setUser, setIsAuthenticated]);

  const onSubmit = (variables: LoginForm) => {
    login({ variables });
  };

  return { formMethods, onSubmit, error, loading };
}
