import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { isDataLoading } from "@utils";
import { useLazyQuery } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import type {
  GetTimelinePostsQuery,
  GetTimelinePostsQueryRequest,
} from "@graphql/@types/post";
import { GET_TIMELINE_POSTS } from "@graphql/post";
import { useAuth } from "@hooks/useAuth";
import type { Placeholder } from "@t/placeholder";

export function useHome() {
  const { user, token } = useAccountContext();
  const [getTimelinePosts, { called, loading, data, fetchMore }] = useLazyQuery<
    GetTimelinePostsQuery,
    GetTimelinePostsQueryRequest
  >(GET_TIMELINE_POSTS);
  const { t } = useTranslation("post");

  const { handleToken } = useAuth();
  const { push } = useRouter();

  useEffect(() => {
    if (user) {
      getTimelinePosts();
    }
  }, [user, getTimelinePosts]);

  useEffect(() => {
    if (token) {
      handleToken(token);
    } else {
      push(PageUrls.LOGOUT);
    }
  }, [token]);

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
    isLoading: isDataLoading(called, loading),
    posts: data?.getTimelinePosts,
    emptyStatus,
    getMoreData,
  };
}
