import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { isDataLoading } from "@utils";
import { useLazyQuery } from "@apollo/client";
import { useModalContext } from "@contexts/ModalContext";
import type {
  GetLikedPostsByPostIDQuery,
  GetLikedPostsByPostIDQueryRequest,
} from "@graphql/@types/likedPost";
import { GET_LIKED_POSTS_BY_POST_ID } from "@graphql/likedPost";
import type { Placeholder } from "@t/placeholder";
import type { UsePostLikesCounterProps } from "./PostLikesCounter.types";

export function usePostLikesCounter(props: UsePostLikesCounterProps) {
  const { postId } = props;
  const { t } = useTranslation("post");
  const { isOpen } = useModalContext();
  const [getLikedPosts, { called, loading, data, fetchMore }] = useLazyQuery<
    GetLikedPostsByPostIDQuery,
    GetLikedPostsByPostIDQueryRequest
  >(GET_LIKED_POSTS_BY_POST_ID);

  useEffect(() => {
    if (isOpen) {
      getLikedPosts({ variables: { postId } });
    }
  }, [getLikedPosts, postId, isOpen]);

  const likedPosts = useMemo(() => {
    return data?.getLikedPostsByPostId;
  }, [data?.getLikedPostsByPostId]);

  const isLoading = useMemo(
    () => isDataLoading(called, loading),
    [called, loading],
  );

  const getMoreData = () =>
    fetchMore({
      variables: {
        postId,
        after: data?.getLikedPostsByPostId.pageInfo.endCursor,
      },
    });

  const emptyStatus: Placeholder = useMemo(
    () => ({
      title: t("status.noLikes.title"),
      icon: "Heart",
    }),
    [t],
  );

  return { isLoading, likedPosts, getMoreData, emptyStatus };
}
