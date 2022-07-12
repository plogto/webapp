import { useEffect } from "react";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import { PageUrls } from "@enums/pages";
import type { GetUserInfoQuery } from "@graphql/@types/user";
import { GET_USER_INFO } from "@graphql/user";
import type { UseAuthenticationProps } from "../AppInit.types";

export function useAuthentication(props: UseAuthenticationProps) {
  const { setUser } = props;
  const [getUserInfo, { data }] = useLazyQuery<GetUserInfoQuery>(GET_USER_INFO);
  const { push } = useRouter();

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
}
