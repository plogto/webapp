import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import type {
  GetUserByUsernameQuery,
  GetUserByUsernameQueryRequest,
} from "@graphql/@types/user";
import { GET_USER_BY_USERNAME } from "@graphql/user";
import type { UseUserProfileProps } from "./@types";

export function useUserProfile(props?: UseUserProfileProps) {
  const { query } = useRouter();
  const defaultUsername = props?.username || "";
  const username = (query.username as string) || defaultUsername;

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
    if (variables.username) {
      getUser({ variables });
    }
  }, [getUser, username, variables]);

  return { username, userResponse, variables };
}
