import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { PageUrls } from "@enums/pages";
import type {
  RegisterMutation,
  RegisterMutationRequest,
} from "@graphql/@types/auth";
import { REGISTER } from "@graphql/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "@hooks/useAuth";
import type { RegisterForm } from "../Auth.types";
import { useGoogle } from "./useGoogle";
import { useInvitation } from "./useInvitation";

export function useRegister() {
  const { oAuthGoogleLoading } = useGoogle();
  const { handleToken } = useAuth();
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
  const [register, { error, loading: registerLoading }] = useMutation<
    RegisterMutation,
    RegisterMutationRequest
  >(REGISTER);

  const onSubmit = (variables: RegisterForm) => {
    register({
      variables: {
        ...variables,
        invitationCode,
      },
    }).then(({ data }) => {
      if (data?.register) {
        const {
          authToken: { token },
        } = data.register;
        token && handleToken(token);
        push(PageUrls.HOME);
      }
    });
  };

  const loading = useMemo(
    () => registerLoading || oAuthGoogleLoading,
    [oAuthGoogleLoading, registerLoading],
  );

  return { formMethods, onSubmit, error, loading };
}
