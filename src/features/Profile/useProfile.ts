import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ProfileActiveTab } from "@enums";
import { useLazyQuery } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import type {
  GetPostsByUsernameQuery,
  GetPostsByUsernameQueryRequest,
  GetSavedPostsQuery,
  GetSavedPostsQueryRequest,
} from "@graphql/@types/post";
import { GET_POSTS_BY_USERNAME, GET_SAVED_POSTS } from "@graphql/post";
import { useNavigator } from "@hooks/useNavigator";
import { useUserProfile } from "@hooks/useUserProfile";
import type { PostTab } from "@t/post";

export function useProfile() {
  const { username, userResponse, variables } = useUserProfile();
  const { t } = useTranslation(["profile", "common"]);

  const { isYourAccount } = useAccountContext();
  const { formatProfilePageRoute, formatSavedPostsPageRoute } = useNavigator();

  const [getPosts, getPostsResponse] = useLazyQuery<
    GetPostsByUsernameQuery,
    GetPostsByUsernameQueryRequest
  >(GET_POSTS_BY_USERNAME);

  const [getSavedPosts, getSavedResponse] = useLazyQuery<
    GetSavedPostsQuery,
    GetSavedPostsQueryRequest
  >(GET_SAVED_POSTS);

  useEffect(() => {
    if (username) {
      getPosts({
        variables,
      });
      isYourAccount && getSavedPosts();
    }
  }, [getPosts, getSavedPosts, isYourAccount, username, variables]);

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
  const getMoreData = (type: ProfileActiveTab) => {
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
  };

  const TABS = useMemo(() => {
    const tabs: PostTab[] = [
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
    if (isYourAccount) {
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
    getPostsResponse.data?.getPostsByUsername.pagination,
    getPostsResponse.data?.getPostsByUsername.posts,
    getPostsResponse.loading,
    getSavedResponse.data?.getSavedPosts.pagination,
    getSavedResponse.data?.getSavedPosts.posts,
    getSavedResponse.loading,
    isYourAccount,
    t,
    username,
  ]);

  return {
    TABS,
    userData,
    isUserLoading,
  };
}
