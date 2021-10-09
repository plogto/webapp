import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAccountContext } from "@context/AccountContext";
import { PageUrls } from "@enums/pages";
import { GET_USER_INFO } from "@graphql/user";
import type { GetUserInfoQuery } from "@graphql/@types/user";

export function AppInit() {
  const { data } = useQuery<GetUserInfoQuery>(GET_USER_INFO);
  const router = useRouter();
  const { setUser } = useAccountContext();

  useEffect(() => {
    if (data) {
      if (data.getUserInfo) {
        setUser(data.getUserInfo);
      } else {
        router.push(PageUrls.LOGOUT);
      }
    }
  }, [data, setUser]);

  return <></>;
}
