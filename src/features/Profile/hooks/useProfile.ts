import { useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { ProfileActiveTab } from "@enums";
import { useLazyQuery } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import type {
  GetPostsByUsernameQuery,
  GetPostsByUsernameQueryRequest,
  GetSavedPostsQuery,
  GetSavedPostsQueryRequest,
} from "@graphql/@types/post";
import type {
  GetUserByUsernameQuery,
  GetUserByUsernameQueryRequest,
} from "@graphql/@types/user";
import { GET_POSTS_BY_USERNAME, GET_SAVED_POSTS } from "@graphql/post";
import { GET_USER_BY_USERNAME } from "@graphql/user";
import { useNavigator } from "@hooks/useNavigator";
import type { Tab } from "@t/post";
import { formatCountTitle } from "@utils/formatter";

export function useProfile() {
  const { query } = useRouter();
  const username = query.username as string;

  const { t } = useTranslation(["profile", "common"]);
  const variables = useMemo(
    () => ({
      username,
    }),
    [username],
  );

  const { user: userAccount } = useAccountContext();
  const { formatProfilePageRoute, formatSavedPostsPageRoute } = useNavigator();

  const [getPosts, getPostsResponse] = useLazyQuery<
    GetPostsByUsernameQuery,
    GetPostsByUsernameQueryRequest
  >(GET_POSTS_BY_USERNAME);

  const [getSavedPosts, getSavedResponse] = useLazyQuery<
    GetSavedPostsQuery,
    GetSavedPostsQueryRequest
  >(GET_SAVED_POSTS);

  const [getUser, userResponse] = useLazyQuery<
    GetUserByUsernameQuery,
    GetUserByUsernameQueryRequest
  >(GET_USER_BY_USERNAME);

  useEffect(() => {
    if (username) {
      getUser({ variables });
      getPosts({
        variables,
      });
      getSavedPosts();
    }
  }, [getPosts, getSavedPosts, getUser, username, variables]);

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

  const getMoreData = useCallback(
    (type: ProfileActiveTab) => {
      switch (type) {
        case ProfileActiveTab.POSTS:
          return getPostsResponse.fetchMore({
            variables: {
              ...variables,
              page: getPostsResponse?.data?.getPostsByUsername?.pagination
                ?.nextPage,
            },
          });

        case ProfileActiveTab.SAVED:
          return getSavedResponse.fetchMore({
            variables: {
              page: getSavedResponse?.data?.getSavedPosts.pagination?.nextPage,
            },
          });
      }
    },
    [getPostsResponse, getSavedResponse, variables],
  );

  const TABS = useMemo(() => {
    const tabs: Tab[] = [
      {
        title: t("profile:tabs.posts"),
        href: formatProfilePageRoute(username),
        data: {
          isLoading: getPostsResponse.loading,
          data: getPostsResponse.data?.getPostsByUsername.posts,
          pagination: getPostsResponse.data?.getPostsByUsername.pagination,
        },
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
        data: {
          isLoading: getSavedResponse.loading,
          data: getSavedResponse.data?.getSavedPosts.posts,
          pagination: getSavedResponse.data?.getSavedPosts.pagination,
        },
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
    getPostsResponse.data?.getPostsByUsername?.pagination,
    getPostsResponse.data?.getPostsByUsername?.posts,
    getPostsResponse.loading,
    getSavedResponse.data?.getSavedPosts?.pagination,
    getSavedResponse.data?.getSavedPosts?.posts,
    getSavedResponse.loading,
    t,
    userAccount?.username,
    userData?.username,
    username,
  ]);

  return {
    TABS,
    COUNTS,
    userData,
    isUserLoading,
  };
}
