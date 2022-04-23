import { useLazyQuery } from "@apollo/client";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import { GET_USER_INFO } from "@graphql/user";
import { useNotifications } from "@hooks/useNotifications";
import type { GetUserInfoQuery } from "@graphql/@types/user";

export function AppInit() {
  const [getUserInfo, { data }] = useLazyQuery<GetUserInfoQuery>(GET_USER_INFO);
  const { push } = useRouter();
  const { user, setUser } = useAccountContext();
  useNotifications();
  const { setTheme } = useTheme();

  useEffect(() => {
    if (user) {
      const theme = `${user?.themeColor}-${user?.primaryColor}`;
      setTheme(theme);
    }
  }, [setTheme, user]);

  useEffect(() => {
    const token = localStorage.getItem("authorization");
    if (token) {
      getUserInfo();
    }
  }, [getUserInfo]);

  useEffect(() => {
    if (data) {
      if (data?.getUserInfo) {
        setUser(data.getUserInfo);
      } else {
        push(PageUrls.LOGOUT);
      }
    }
  }, [data, setUser]);

  return <></>;
}
