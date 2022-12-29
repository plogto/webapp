import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { isDataLoading } from "@utils";
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
  const [getExplorePosts, { called, loading, data, fetchMore }] = useLazyQuery<
    GetExplorePostsQuery,
    GetExplorePostsQueryRequest
  >(GET_EXPLORE_POSTS);
  const { t } = useTranslation("post");

  useEffect(() => {
    if (user) {
      getExplorePosts();
    }
  }, [user, getExplorePosts]);

  const placeholder: Placeholder = useMemo(
    () => ({
      title: t("placeholders.noPosts.title"),
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
    isLoading: isDataLoading(called, loading),
    posts: data?.getExplorePosts,
    placeholder,
    getMoreData,
  };
}
