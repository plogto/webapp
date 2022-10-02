import { useEffect } from "react";
import { useRouter } from "next/router";
import { LocalStorageKeys } from "@enums";
import { useLazyQuery } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import type { GetUserInfoQuery } from "@graphql/@types/user";
import { GET_USER_INFO } from "@graphql/user";
import { useNavigator } from "@hooks/useNavigator";
import { getToken } from "@utils/localStorage";

export function useAuth() {
  const { setToken, setIsAuthenticated, setUser } = useAccountContext();
  const [getUserInfo] = useLazyQuery<GetUserInfoQuery>(GET_USER_INFO);
  const { push } = useRouter();
  const { isProtectedPage } = useNavigator();

  const handleGetUserInfo = () => {
    getUserInfo().then(({ data }) => {
      const user = data?.getUserInfo;
      if (user) {
        setUser(user);
      } else {
        push(PageUrls.LOGOUT);
      }
    });
  };

  const handleToken = (token: string) => {
    localStorage.setItem(LocalStorageKeys.AUTHORIZATION, token);
    localStorage.removeItem(LocalStorageKeys.INVITATION_CODE);
    setToken(token);
    setIsAuthenticated(true);
    handleGetUserInfo();
  };

  useEffect(() => {
    if (getToken()) {
      handleGetUserInfo();
    } else {
      if (isProtectedPage) {
        push(PageUrls.LOGOUT);
      }
    }
  }, [getToken, getUserInfo, isProtectedPage, setUser]);

  return { handleToken };
}
