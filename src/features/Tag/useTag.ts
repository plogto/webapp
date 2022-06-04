import { useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import type {
  GetPostsByTagNameQuery,
  GetPostsByTagNameQueryRequest,
} from "@graphql/@types/post";
import type {
  GetTagByTagNameQuery,
  GetTagByTagNameQueryRequest,
} from "@graphql/@types/tag";
import { GET_POSTS_BY_TAG_NAME } from "@graphql/post";
import { GET_TAG_BY_TAG_NAME } from "@graphql/tag";
import { useNavigator } from "@hooks/useNavigator";
import type { Tab } from "@t/post";

export function useTag() {
  const { query } = useRouter();
  const tagName = query.tagName as string;
  const variables = useMemo(
    () => ({
      tagName,
    }),
    [tagName],
  );
  const { t } = useTranslation("tag");
  const { formatTagPageRoute } = useNavigator();

  const [getTagData, getTagDataResponse] = useLazyQuery<
    GetTagByTagNameQuery,
    GetTagByTagNameQueryRequest
  >(GET_TAG_BY_TAG_NAME);

  const [getPosts, getPostsResponse] = useLazyQuery<
    GetPostsByTagNameQuery,
    GetPostsByTagNameQueryRequest
  >(GET_POSTS_BY_TAG_NAME);

  useEffect(() => {
    if (tagName) {
      getPosts({
        variables,
      });
      getTagData({
        variables,
      });
    }
  }, [getPosts, getTagData, tagName, variables]);

  const getMoreData = useCallback(() => {
    return getPostsResponse.fetchMore({
      variables: {
        ...variables,
        page: getPostsResponse.data?.getPostsByTagName?.pagination?.nextPage,
      },
    });
  }, [getPostsResponse, variables]);

  const TABS = useMemo(() => {
    const tabs: Tab[] = [
      {
        title: t("tabs.posts"),
        href: formatTagPageRoute(tagName),
        data: {
          isLoading: getPostsResponse.loading,
          data: getPostsResponse.data?.getPostsByTagName.posts,
          pagination: getPostsResponse.data?.getPostsByTagName.pagination,
        },
        getMoreData,
        emptyStatus: {
          title: t("status.noPosts.title"),
          description: t("status.noPosts.description"),
          icon: "Photo",
        },
      },
    ];

    return tabs;
  }, [
    formatTagPageRoute,
    getMoreData,
    getPostsResponse.data?.getPostsByTagName.pagination,
    getPostsResponse.data?.getPostsByTagName.posts,
    getPostsResponse.loading,
    t,
    tagName,
  ]);

  return {
    tagData: {
      isLoading: getTagDataResponse.loading,
      data: getTagDataResponse.data?.getTagByTagName,
    },
    TABS,
    t,
  };
}
