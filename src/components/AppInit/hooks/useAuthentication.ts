import { useEffect } from "react";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import type { GetUserInfoQuery } from "@graphql/@types/user";
import { GET_USER_INFO } from "@graphql/user";
import { useAuth } from "@hooks/useAuth";
import { useNavigator } from "@hooks/useNavigator";
import type { UseAuthenticationProps } from "../AppInit.types";

export function useAuthentication(props: UseAuthenticationProps) {
  const { setUser } = props;
  const [getUserInfo, { data }] = useLazyQuery<GetUserInfoQuery>(GET_USER_INFO);
  const { push } = useRouter();
  const { isProtectedPage, isHomePage } = useNavigator();
  const { getToken } = useAuth();
  const { setIsAuthenticated } = useAccountContext();

  useEffect(() => {
    if (getToken()) {
      getUserInfo();
    }
  }, [getUserInfo]);

  useEffect(() => {
    if (data?.getUserInfo) {
      setUser(data.getUserInfo);
    } else {
      setIsAuthenticated(false);
      if (isProtectedPage) {
        push(PageUrls.LOGOUT);
      }

      const token = getToken();
      if (isHomePage && token) {
        push(PageUrls.LOGOUT);
      }
    }
  }, [data, setUser]);
}
