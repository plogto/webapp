import { useQuery } from "@apollo/client";
import { useAccountContext } from "@context/AccountContext";
import { PageUrls } from "@enums/pages";
import type { GetUserInfoQuery } from "@graphql/@types/user";
import { GET_USER_INFO } from "@graphql/user";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function AppInit(): JSX.Element {
  const { data, error } = useQuery<GetUserInfoQuery>(GET_USER_INFO);
  const router = useRouter();
  const { setUser } = useAccountContext();

  useEffect(() => {
    if (data) {
      setUser(data.getUserInfo);
    }
  }, [data, setUser]);

  useEffect(() => {
    if (error) {
      router.push(PageUrls.LOGOUT);
    }
  }, [error]);

  return <></>;
}
