import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ProfileActiveTab } from "@enums";
import { isDataLoading } from "@utils";
import { useLazyQuery } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import type {
  GetPostsByUsernameQuery,
  GetPostsByUsernameQueryRequest,
  GetRepliesByUsernameQuery,
  GetRepliesByUsernameQueryRequest,
  GetSavedPostsQuery,
  GetSavedPostsQueryRequest,
} from "@graphql/@types/post";
import {
  GET_POSTS_BY_USERNAME,
  GET_REPLIES_BY_USERNAME,
  GET_SAVED_POSTS,
} from "@graphql/post";
import { useNavigator } from "@hooks/useNavigator";
import { useUserProfile } from "@hooks/useUserProfile";
import type { PostTab } from "@t/post";
import { transformSavedPostsToPosts } from "./Profile.utils";

export function useProfile() {
  const { username, userResponse, variables } = useUserProfile();
  const { t } = useTranslation(["profile", "common"]);

  const { isYourAccount } = useAccountContext();
  const {
    formatRepliesPostsPageRoute,
    formatProfilePageRoute,
    formatSavedPostsPageRoute,
  } = useNavigator();

  const [getReplies, getRepliesResponse] = useLazyQuery<
    GetRepliesByUsernameQuery,
    GetRepliesByUsernameQueryRequest
  >(GET_REPLIES_BY_USERNAME);

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
      getReplies({
        variables,
      });
      isYourAccount(username) && getSavedPosts();
    }
  }, [getPosts, getReplies, getSavedPosts, isYourAccount, username, variables]);

  const userData = useMemo(
    () => userResponse.data?.getUserByUsername,
    [userResponse.data?.getUserByUsername],
  );

  const isUserLoading = useMemo(
    () => isDataLoading(userResponse.called, userResponse.loading),
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
            after:
              getPostsResponse?.data?.getPostsByUsername?.pageInfo.endCursor,
          },
        });

      case ProfileActiveTab.REPLIES:
        return getRepliesResponse.fetchMore({
          variables: {
            ...variables,
            after:
              getRepliesResponse?.data?.getRepliesByUsername?.pageInfo
                .endCursor,
          },
        });

      case ProfileActiveTab.SAVED:
        return getSavedResponse.fetchMore({
          variables: {
            after: getSavedResponse?.data?.getSavedPosts?.pageInfo.endCursor,
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
          data: getPostsResponse.data?.getPostsByUsername,
        },
        getMoreData: () => getMoreData(ProfileActiveTab.POSTS),
        emptyStatus: {
          title: t("profile:status.noPosts.title"),
          description: t("profile:status.noPosts.description"),
          icon: "Photo",
        },
      },
      {
        title: t("profile:tabs.replies"),
        href: formatRepliesPostsPageRoute(username),
        data: {
          isLoading: getRepliesResponse.loading,
          data: getRepliesResponse.data?.getRepliesByUsername,
        },
        getMoreData: () => getMoreData(ProfileActiveTab.REPLIES),
        emptyStatus: {
          title: t("profile:status.noReplies.title"),
          icon: "Photo",
        },
      },
    ];
    if (isYourAccount(username)) {
      tabs.push({
        title: t("profile:tabs.saved"),
        href: formatSavedPostsPageRoute(username),
        data: {
          isLoading: getSavedResponse.loading,
          data: transformSavedPostsToPosts(
            getSavedResponse.data?.getSavedPosts,
          ),
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
    formatRepliesPostsPageRoute,
    formatSavedPostsPageRoute,
    getMoreData,
    getPostsResponse.data?.getPostsByUsername,
    getPostsResponse.loading,
    getRepliesResponse.data?.getRepliesByUsername,
    getRepliesResponse.loading,
    getSavedResponse.data?.getSavedPosts,
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
