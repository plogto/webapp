import { useQuery } from "@apollo/client";
import { useAccount } from "@/context/AccountContext";
import { GET_USER_INFO } from "@/graphql/user";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { PageUrls } from "@/@enums/pages";

function AppInit() {
  const { data, error } = useQuery(GET_USER_INFO);
  const router = useRouter();
  const { setUser } = useAccount();

  useEffect(() => {
    if (data) {
      setUser(data.getUserInfo);
    }
  }, [data, setUser]);

  useEffect(() => {
    if (error) {
      console.log("logout");
      router.push(PageUrls.LOGOUT);
    }
  }, [error]);

  return <></>;
}

export default AppInit;
