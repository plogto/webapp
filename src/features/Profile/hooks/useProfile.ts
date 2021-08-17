import { User } from "@/@types/user";
import { GET_USER_BY_USERNAME } from "@/graphql/user";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function useProfile() {
  const router = useRouter();
  const username = router.query.username;
  const [getUserByUsername, { error, loading, data }] =
    useLazyQuery(GET_USER_BY_USERNAME);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (username) {
      getUserByUsername({
        variables: {
          username,
        },
      });
    }
  }, [username]);

  useEffect(() => {
    if (data) {
      setUser(data.getUserByUsername);
    }
  }, [data]);

  return { error, loading, user, router };
}
