import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  GET_FOLLOWERS_BY_USERNAME,
  GET_FOLLOWING_BY_USERNAME,
} from "@graphql/connection";
import { GET_USER_BY_USERNAME } from "@graphql/user";
import { useNavigation } from "@hooks/useNavigation";
import type { ConnectionsProps, ConnectionsTab } from "../@types";
import type {
  GetFollowersByUsernameQuery,
  GetFollowingByUsernameQuery,
} from "@graphql/@types/connection";
import type { GetUserByUsernameQuery } from "@graphql/@types/user";

export function useConnections({ type }: ConnectionsProps) {
  const { query, push } = useRouter();
  const username = query.username as string;
  const { formatFollowersPageRoute, formatFollowingPageRoute } =
    useNavigation();
  const { t } = useTranslation("common");
  const variables = useMemo(
    () => ({
      username,
    }),
    [username],
  );

  const [getUserByUsername, userResponse] =
    useLazyQuery<GetUserByUsernameQuery>(GET_USER_BY_USERNAME, {
      variables: { username },
    });

  const [getFollowersByUsername, getFollowersByUsernameResponse] = useLazyQuery<
    GetFollowersByUsernameQuery,
    { username: string }
  >(GET_FOLLOWERS_BY_USERNAME);

  const [getFollowingByUsername, getFollowingByUsernameResponse] = useLazyQuery<
    GetFollowingByUsernameQuery,
    { username: string }
  >(GET_FOLLOWING_BY_USERNAME);

  const CONNECTIONS_TABS: ConnectionsTab[] = useMemo(
    () => [
      {
        type: "followers",
        title: t("followers"),
        onClick: () =>
          push({
            pathname: formatFollowersPageRoute(username),
          }),
      },
      {
        type: "following",
        title: t("following"),
        onClick: () =>
          push({
            pathname: formatFollowingPageRoute(username),
          }),
      },
    ],
    [formatFollowersPageRoute, formatFollowingPageRoute, push, t, username],
  );

  useEffect(() => {
    if (query.username) {
      getUserByUsername({ variables });
      if (type === "followers") {
        getFollowersByUsername({
          variables: { username: username as string },
        });
      } else if (type === "following") {
        getFollowingByUsername({
          variables: { username: username as string },
        });
      }
    }
  }, [
    getFollowersByUsername,
    getFollowingByUsername,
    getUserByUsername,
    query.username,
    type,
    username,
    variables,
  ]);

  return {
    CONNECTIONS_TABS,
    user: userResponse.data?.getUserByUsername,
    connections: {
      followers: getFollowersByUsernameResponse?.data?.getFollowersByUsername,
      following: getFollowingByUsernameResponse?.data?.getFollowingByUsername,
    },
  };
}
