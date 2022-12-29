import { useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { isDataLoading } from "@utils";
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
import type { PostTab } from "@t/post";

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
        after: getPostsResponse.data?.getPostsByTagName.pageInfo.endCursor,
      },
    });
  }, [getPostsResponse, variables]);

  const TABS = useMemo(() => {
    const tabs: PostTab[] = [
      {
        title: t("tabs.posts"),
        href: formatTagPageRoute(tagName),
        data: {
          isLoading: getPostsResponse.loading,
          data: getPostsResponse.data?.getPostsByTagName,
        },
        getMoreData,
        placeholder: {
          title: t("placeholders.noPosts.title"),
          description: t("placeholders.noPosts.description"),
          icon: "Photo",
        },
      },
    ];

    return tabs;
  }, [
    formatTagPageRoute,
    getMoreData,
    getPostsResponse.data?.getPostsByTagName,
    getPostsResponse.loading,
    t,
    tagName,
  ]);

  return {
    tagData: {
      isLoading: isDataLoading(
        getTagDataResponse.called,
        getTagDataResponse.loading,
      ),
      data: getTagDataResponse.data?.getTagByTagName,
    },
    TABS,
  };
}
