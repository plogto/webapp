import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ConnectionsActiveTab } from "@enums";
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
import { Status } from "@t/status";
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
            page: getFollowingByUsernameResponse?.data?.getFollowingByUsername
              ?.pagination?.nextPage,
          },
        });

      case ConnectionsActiveTab.FOLLOWERS:
        return getFollowersByUsernameResponse.fetchMore({
          variables: {
            page: getFollowersByUsernameResponse?.data?.getFollowersByUsername
              ?.pagination?.nextPage,
          },
        });
    }
  };

  const emptyStatus: Status = useMemo(
    () => ({
      title: t("connection:status.noConnections.title"),
      icon: "User",
    }),
    [t],
  );

  const TABS = useMemo(() => {
    const tabs: ConnectionTab[] = [
      {
        dataKey: "following",
        title: t("connection:tabs.following"),
        href: formatFollowingPageRoute(username),
        data: {
          isLoading: getFollowingByUsernameResponse.loading,
          data: getFollowingByUsernameResponse.data?.getFollowingByUsername
            ?.connections,
          pagination:
            getFollowingByUsernameResponse.data?.getFollowingByUsername
              ?.pagination,
        },
        getMoreData: () => getMoreData(ConnectionsActiveTab.FOLLOWING),
        emptyStatus,
      },
      {
        dataKey: "follower",
        title: t("connection:tabs.followers"),
        href: formatFollowersPageRoute(username),
        data: {
          isLoading: getFollowersByUsernameResponse.loading,
          data: getFollowersByUsernameResponse.data?.getFollowersByUsername
            ?.connections,
          pagination:
            getFollowersByUsernameResponse.data?.getFollowersByUsername
              ?.pagination,
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
    getFollowersByUsernameResponse.data?.getFollowersByUsername?.connections,
    getFollowersByUsernameResponse.data?.getFollowersByUsername?.pagination,
    getFollowersByUsernameResponse.loading,
    getFollowingByUsernameResponse.data?.getFollowingByUsername?.connections,
    getFollowingByUsernameResponse.data?.getFollowingByUsername?.pagination,
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