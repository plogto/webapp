import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import type {
  GetTimelinePostsQuery,
  GetTimelinePostsQueryRequest,
} from "@graphql/@types/post";
import { GET_TIMELINE_POSTS } from "@graphql/post";
import type { Status } from "@t/status";

export function useHome() {
  const { push } = useRouter();
  const { user, isAuthenticated } = useAccountContext();
  const [getTimelinePosts, { loading, data, fetchMore }] = useLazyQuery<
    GetTimelinePostsQuery,
    GetTimelinePostsQueryRequest
  >(GET_TIMELINE_POSTS);
  const { t } = useTranslation("post");

  // TODO: improve this part
  useEffect(() => {
    if (!isAuthenticated) {
      push(PageUrls.LOGIN);
    }
  }, [isAuthenticated, push]);

  useEffect(() => {
    if (user) {
      getTimelinePosts();
    }
  }, [user, getTimelinePosts]);

  const emptyStatus: Status = useMemo(
    () => ({
      title: t("status.noPosts.title"),
      icon: "Photo",
    }),
    [t],
  );

  const pagination = useMemo(
    () => data?.getTimelinePosts.pagination,
    [data?.getTimelinePosts.pagination],
  );

  const getMoreData = () =>
    fetchMore({
      variables: {
        page: data?.getTimelinePosts?.pagination?.nextPage,
      },
    });

  return {
    loading,
    posts: data?.getTimelinePosts?.posts,
    pagination,
    emptyStatus,
    getMoreData,
  };
}
