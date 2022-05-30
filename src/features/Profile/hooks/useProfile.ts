import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { ProfileActiveTab } from "@enums";
import { useLazyQuery } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import { useProfileContext } from "@contexts/ProfileContext";
import type {
  GetUserByUsernameQuery,
  GetUserByUsernameQueryRequest,
} from "@graphql/@types/user";
import { GET_USER_BY_USERNAME } from "@graphql/user";
import { useNavigator } from "@hooks/useNavigator";
import { formatCountTitle } from "@utils/formatter";
import { Tab } from "../Profile.types";

export function useProfile() {
  const { query } = useRouter();
  const { t } = useTranslation(["profile", "common"]);
  const { username, setActiveTab, posts, savedPosts, getMoreData } =
    useProfileContext();

  const { user: userAccount } = useAccountContext();
  const { formatProfilePageRoute, formatSavedPostsPageRoute } = useNavigator();

  const [getUser, userResponse] = useLazyQuery<
    GetUserByUsernameQuery,
    GetUserByUsernameQueryRequest
  >(GET_USER_BY_USERNAME);

  useEffect(() => {
    if (username) {
      getUser({ variables: { username } });
    }
  }, [getUser, username]);

  const userData = useMemo(
    () => userResponse.data?.getUserByUsername,
    [userResponse.data?.getUserByUsername],
  );

  const isUserLoading = useMemo(
    () => userResponse.loading || !userResponse.called,
    [userResponse.called, userResponse.loading],
  );

  // TODO: refactor this counts
  const COUNTS = [
    {
      ...formatCountTitle({
        singular: t("common:post"),
        plural: t("common:posts"),
        count: userData?.postsCount,
      }),
    },
    {
      ...formatCountTitle({
        singular: t("common:follower"),
        plural: t("common:followers"),
        count: userData?.followersCount,
      }),
      href: `${userData?.username}/followers`,
    },
    {
      ...formatCountTitle({
        singular: t("common:following"),
        plural: t("common:following"),
        count: userData?.followingCount,
      }),
      href: `${userData?.username}/following`,
    },
  ];

  const TABS = useMemo(() => {
    const tabs: Tab[] = [
      {
        title: t("profile:tabs.posts"),
        href: formatProfilePageRoute(username),
        data: posts,
        getMoreData: () => getMoreData(ProfileActiveTab.POSTS),
        emptyStatus: {
          title: t("profile:status.noPosts.title"),
          description: t("profile:status.noPosts.description"),
          icon: "Photo",
        },
      },
    ];
    // TODO: implement isYourAccount method
    if (userData?.username === userAccount?.username) {
      tabs.push({
        title: t("profile:tabs.saved"),
        href: formatSavedPostsPageRoute(username),
        data: savedPosts,
        getMoreData: () => getMoreData(ProfileActiveTab.SAVED),
        emptyStatus: {
          title: t("profile:status.noSavedPosts.title"),
          icon: "Bookmark",
        },
      });
    }

    return tabs;
  }, [
    formatProfilePageRoute,
    formatSavedPostsPageRoute,
    getMoreData,
    posts,
    savedPosts,
    t,
    userData?.username,
    userAccount?.username,
    username,
  ]);

  useEffect(() => {
    const tab = query.tab;
    switch (tab) {
      case "saved":
        setActiveTab(ProfileActiveTab.SAVED);
      default:
        setActiveTab(ProfileActiveTab.POSTS);
    }
  }, [query, query.tab, setActiveTab]);

  return {
    TABS,
    COUNTS,
    userData,
    isUserLoading,
  };
}
