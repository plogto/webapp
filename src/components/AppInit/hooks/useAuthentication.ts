import { useEffect } from "react";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import { PageUrls } from "@enums/pages";
import type { GetUserInfoQuery } from "@graphql/@types/user";
import { GET_USER_INFO } from "@graphql/user";
import { useAuth } from "@hooks/useAuth";
import { useNavigator } from "@hooks/useNavigator";
import type { UseAuthenticationProps } from "../AppInit.types";

export function useAuthentication(props: UseAuthenticationProps) {
  const { setUser } = props;
  const [getUserInfo] = useLazyQuery<GetUserInfoQuery>(GET_USER_INFO);
  const { push } = useRouter();
  const { isProtectedPage } = useNavigator();
  const { getToken } = useAuth();

  useEffect(() => {
    if (getToken()) {
      getUserInfo()
        .then(({ data }) => {
          if (data) {
            setUser(data?.getUserInfo);
          }
        })
        .catch(() => {
          if (isProtectedPage) {
            push(PageUrls.LOGOUT);
          }
        });
    }
  }, []);
}
