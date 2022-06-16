import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import {
  GetUserByUsernameQuery,
  GetUserByUsernameQueryRequest,
} from "@graphql/@types/user";
import { GET_USER_BY_USERNAME } from "@graphql/user";

export function useUserProfile() {
  const { query } = useRouter();
  const username = query.username as string;

  const variables = useMemo(
    () => ({
      username,
    }),
    [username],
  );

  const [getUser, userResponse] = useLazyQuery<
    GetUserByUsernameQuery,
    GetUserByUsernameQueryRequest
  >(GET_USER_BY_USERNAME);

  useEffect(() => {
    if (username) {
      getUser({ variables });
    }
  }, [getUser, username, variables]);

  return { username, userResponse, variables };
}
