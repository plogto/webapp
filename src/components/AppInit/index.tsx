import { useQuery } from "@apollo/client";
import { useAccount } from "@/context/AccountContext";
import { GET_USER_INFO } from "@/graphql/user";
import { useEffect } from "react";

function AppInit() {
  const { data } = useQuery(GET_USER_INFO);
  const { setUser } = useAccount();

  useEffect(() => {
    if (data) {
      setUser(data.getUserInfo);
    }
  }, [data]);

  return <></>;
}

export default AppInit;
