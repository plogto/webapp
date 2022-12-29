import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ProfileActiveTab } from "@enums";
import { isDataLoading } from "@utils";
import { useLazyQuery } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import type {
  GetLikedPostsByUsernameQuery,
  GetLikedPostsByUsernameQueryRequest,
  GetPostsByUsernameQuery,
  GetPostsByUsernameQueryRequest,
  GetRepliesByUsernameQuery,
  GetRepliesByUsernameQueryRequest,
  GetSavedPostsQuery,
  GetSavedPostsQueryRequest,
} from "@graphql/@types/post";
import {
  GET_LIKED_POSTS_BY_USERNAME,
  GET_POSTS_BY_USERNAME,
  GET_REPLIES_BY_USERNAME,
  GET_SAVED_POSTS,
} from "@graphql/post";
import { useNavigator } from "@hooks/useNavigator";
import { useUserProfile } from "@hooks/useUserProfile";
import type { PostTab } from "@t/post";
import {
  transformLikedPostsToPosts,
  transformSavedPostsToPosts,
} from "./Profile.utils";

export function useProfile() {
  const { username, userResponse, variables } = useUserProfile();
  const { t } = useTranslation(["profile", "common"]);

  const { isYourAccount } = useAccountContext();
  const {
    formatProfilePageRoute,
    formatRepliesPostsPageRoute,
    formatLikesPostsPageRoute,
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

  const [getLikedPosts, getLikedPostsResponse] = useLazyQuery<
    GetLikedPostsByUsernameQuery,
    GetLikedPostsByUsernameQueryRequest
  >(GET_LIKED_POSTS_BY_USERNAME);

  useEffect(() => {
    if (username) {
      getPosts({
        variables,
      });
      getReplies({
        variables,
      });
      getLikedPosts({
        variables,
      });
      isYourAccount(username) && getSavedPosts();
    }
  }, [
    getLikedPosts,
    getPosts,
    getReplies,
    getSavedPosts,
    isYourAccount,
    username,
    variables,
  ]);

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

      case ProfileActiveTab.LIKES:
        return getLikedPostsResponse.fetchMore({
          variables: {
            ...variables,
            after:
              getLikedPostsResponse?.data?.getLikedPostsByUsername?.pageInfo
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
        icon: "ViewGrid",
        href: formatProfilePageRoute(username),
        data: {
          isLoading: getPostsResponse.loading,
          data: getPostsResponse.data?.getPostsByUsername,
        },
        getMoreData: () => getMoreData(ProfileActiveTab.POSTS),
        placeholder: {
          title: t("profile:placeholders.noPosts.title"),
          description: t("profile:placeholders.noPosts.description"),
          icon: "Photo",
        },
      },
      {
        title: t("profile:tabs.replies"),
        icon: "Comment",
        href: formatRepliesPostsPageRoute(username),
        data: {
          isLoading: getRepliesResponse.loading,
          data: getRepliesResponse.data?.getRepliesByUsername,
        },
        getMoreData: () => getMoreData(ProfileActiveTab.REPLIES),
        placeholder: {
          title: t("profile:placeholders.noReplies.title"),
          icon: "Photo",
        },
      },
      {
        title: t("profile:tabs.likes"),
        icon: "Heart",
        href: formatLikesPostsPageRoute(username),
        data: {
          isLoading: getLikedPostsResponse.loading,
          data: transformLikedPostsToPosts(
            getLikedPostsResponse.data?.getLikedPostsByUsername,
          ),
        },
        getMoreData: () => getMoreData(ProfileActiveTab.LIKES),
        placeholder: {
          title: t("profile:placeholders.noLikes.title"),
          icon: "Heart",
        },
      },
    ];
    if (isYourAccount(username)) {
      tabs.push({
        title: t("profile:tabs.saved"),
        icon: "Bookmark",
        href: formatSavedPostsPageRoute(username),
        data: {
          isLoading: getSavedResponse.loading,
          data: transformSavedPostsToPosts(
            getSavedResponse.data?.getSavedPosts,
          ),
        },
        getMoreData: () => getMoreData(ProfileActiveTab.SAVED),
        placeholder: {
          title: t("profile:placeholders.noSavedPosts.title"),
          icon: "Bookmark",
        },
      });
    }

    return tabs;
  }, [
    formatLikesPostsPageRoute,
    formatProfilePageRoute,
    formatRepliesPostsPageRoute,
    formatSavedPostsPageRoute,
    getLikedPostsResponse.data?.getLikedPostsByUsername,
    getLikedPostsResponse.loading,
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
