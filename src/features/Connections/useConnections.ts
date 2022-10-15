import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ConnectionsActiveTab, UsersListDataKey } from "@enums";
import { useLazyQuery } from "@apollo/client";
import {
  GetFollowersByUsernameQuery,
  GetFollowersByUsernameQueryRequest,
  GetFollowingByUsernameQuery,
  GetFollowingByUsernameQueryRequest,
} from "@graphql/@types/connection";
import {
  GET_FOLLOWERS_BY_USERNAME,
  GET_FOLLOWING_BY_USERNAME,
} from "@graphql/connection";
import { useNavigator } from "@hooks/useNavigator";
import { useUserProfile } from "@hooks/useUserProfile";
import { ConnectionTab } from "@t/connection";
import { Placeholder } from "@t/placeholder";
import type { ConnectionsProps } from "./Connections.types";

export function useConnections({ type }: ConnectionsProps) {
  const { username, userResponse, variables } = useUserProfile();
  const { formatFollowersPageRoute, formatFollowingPageRoute } = useNavigator();
  const { t } = useTranslation(["common", "connection"]);

  const [getFollowersByUsername, getFollowersByUsernameResponse] = useLazyQuery<
    GetFollowersByUsernameQuery,
    GetFollowersByUsernameQueryRequest
  >(GET_FOLLOWERS_BY_USERNAME);

  const [getFollowingByUsername, getFollowingByUsernameResponse] = useLazyQuery<
    GetFollowingByUsernameQuery,
    GetFollowingByUsernameQueryRequest
  >(GET_FOLLOWING_BY_USERNAME);

  useEffect(() => {
    if (username) {
      getFollowersByUsername({
        variables,
      });
      getFollowingByUsername({
        variables,
      });
    }
  }, [
    getFollowersByUsername,
    getFollowingByUsername,
    type,
    username,
    variables,
  ]);

  const userData = useMemo(
    () => userResponse.data?.getUserByUsername,
    [userResponse.data?.getUserByUsername],
  );

  const isUserLoading = useMemo(
    () => userResponse.loading || !userResponse.called,
    [userResponse.called, userResponse.loading],
  );

  // TODO: remove eslint-disable
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getMoreData = (type: ConnectionsActiveTab) => {
    switch (type) {
      case ConnectionsActiveTab.FOLLOWING:
        return getFollowingByUsernameResponse.fetchMore({
          variables: {
            ...variables,
            after:
              getFollowingByUsernameResponse?.data?.getFollowingByUsername
                ?.pageInfo.endCursor,
          },
        });

      case ConnectionsActiveTab.FOLLOWERS:
        return getFollowersByUsernameResponse.fetchMore({
          variables: {
            after:
              getFollowersByUsernameResponse?.data?.getFollowersByUsername
                ?.pageInfo.endCursor,
          },
        });
    }
  };

  const emptyStatus: Placeholder = useMemo(
    () => ({
      title: t("connection:status.noConnections.title"),
      icon: "User",
    }),
    [t],
  );

  const TABS = useMemo(() => {
    const tabs: ConnectionTab[] = [
      {
        dataKey: UsersListDataKey.FOLLOWING,
        title: t("connection:tabs.following"),
        href: formatFollowingPageRoute(username),
        data: {
          isLoading: getFollowingByUsernameResponse.loading,
          data: getFollowingByUsernameResponse.data?.getFollowingByUsername,
        },
        getMoreData: () => getMoreData(ConnectionsActiveTab.FOLLOWING),
        emptyStatus,
      },
      {
        dataKey: UsersListDataKey.FOLLOWER,
        title: t("connection:tabs.followers"),
        href: formatFollowersPageRoute(username),
        data: {
          isLoading: getFollowersByUsernameResponse.loading,
          data: getFollowersByUsernameResponse.data?.getFollowersByUsername,
        },
        getMoreData: () => getMoreData(ConnectionsActiveTab.FOLLOWERS),
        emptyStatus,
      },
    ];

    return tabs;
  }, [
    emptyStatus,
    formatFollowersPageRoute,
    formatFollowingPageRoute,
    getFollowersByUsernameResponse.data?.getFollowersByUsername,
    getFollowersByUsernameResponse.loading,
    getFollowingByUsernameResponse.data?.getFollowingByUsername,
    getFollowingByUsernameResponse.loading,
    getMoreData,
    t,
    username,
  ]);

  return {
    TABS,
    userData,
    isUserLoading,
  };
}
