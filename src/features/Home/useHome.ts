import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLazyQuery } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import type {
  GetTimelinePostsQuery,
  GetTimelinePostsQueryRequest,
} from "@graphql/@types/post";
import { GET_TIMELINE_POSTS } from "@graphql/post";
import type { Placeholder } from "@t/placeholder";

export function useHome() {
  const { user } = useAccountContext();
  const [getTimelinePosts, { loading, data, fetchMore }] = useLazyQuery<
    GetTimelinePostsQuery,
    GetTimelinePostsQueryRequest
  >(GET_TIMELINE_POSTS);
  const { t } = useTranslation("post");

  useEffect(() => {
    if (user) {
      getTimelinePosts();
    }
  }, [user, getTimelinePosts]);

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
        after: data?.getTimelinePosts?.pageInfo.endCursor,
      },
    });

  return {
    loading,
    posts: data?.getTimelinePosts,
    emptyStatus,
    getMoreData,
  };
}
