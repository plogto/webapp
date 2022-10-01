import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLazyQuery } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import type {
  GetExplorePostsQuery,
  GetExplorePostsQueryRequest,
} from "@graphql/@types/post";
import { GET_EXPLORE_POSTS } from "@graphql/post";
import type { Placeholder } from "@t/placeholder";

export function usePosts() {
  const { user } = useAccountContext();
  const [getExplorePosts, { loading, data, fetchMore }] = useLazyQuery<
    GetExplorePostsQuery,
    GetExplorePostsQueryRequest
  >(GET_EXPLORE_POSTS);
  const { t } = useTranslation("post");

  useEffect(() => {
    if (user) {
      getExplorePosts();
    }
  }, [user, getExplorePosts]);

  const emptyStatus: Placeholder = useMemo(
    () => ({
      title: t("status.noPosts.title"),
      icon: "Photo",
    }),
    [t],
  );

  const getMoreData = () =>
    fetchMore({
      variables: {
        after: data?.getExplorePosts?.pageInfo.endCursor,
      },
    });

  return {
    loading,
    posts: data?.getExplorePosts,
    emptyStatus,
    getMoreData,
  };
}
