import { useEffect, useMemo, useState } from "react";
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
import type { Post } from "@t/post";
import type { Status } from "@t/status";

export function useHome() {
  const { push } = useRouter();
  const { user, isAuthenticated } = useAccountContext();
  const [isLoading, setIsLoading] = useState(true);
  const [getTimelinePosts, { loading, data, fetchMore }] = useLazyQuery<
    GetTimelinePostsQuery,
    GetTimelinePostsQueryRequest
  >(GET_TIMELINE_POSTS);
  const [posts, setPosts] = useState<Post[]>([]);
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

  useEffect(() => {
    if (data) {
      setPosts(data.getTimelinePosts.posts);
      setIsLoading(loading);
    }
  }, [data, loading]);

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
    isLoading,
    posts,
    pagination,
    emptyStatus,
    getMoreData,
  };
}
