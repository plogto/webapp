import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import type { RegisterMutation } from "@graphql/@types/auth";
import { REGISTER } from "@graphql/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import type { RegisterForm } from "../Auth.types";
import { useRouter } from "next/router";

export function useRegister() {
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
  const [register, { error, loading, data }] =
    useMutation<RegisterMutation>(REGISTER);
  const { setIsAuthenticated, setToken, setUser } = useAccountContext();

  useEffect(() => {
    if (data?.register) {
      const {
        authToken: { token },
        user,
      } = data.register;
      localStorage.setItem("authorization", token);
      setToken(token);
      setUser(user);
      setIsAuthenticated(true);
      push(PageUrls.HOME);
    }
  }, [data, setToken, setUser, setIsAuthenticated]);

  const onSubmit = (variables: RegisterForm) => {
    register({ variables });
  };

  return { formMethods, onSubmit, error, loading };
}
