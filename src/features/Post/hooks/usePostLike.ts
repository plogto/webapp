import { useMutation } from "@apollo/client";
import { useCallback, useEffect } from "react";
import { usePostContext } from "@contexts/PostContext";
import { LIKE_POST, UNLIKE_POST } from "@graphql/postLike";
import type {
  LikePostMutation,
  UnlikePostMutation,
} from "@graphql/@types/postLike";

export function usePostLike() {
  const [likePostMutation, likePostResponse] =
    useMutation<LikePostMutation>(LIKE_POST);
  const [unlikePostMutation, unlikePostResponse] =
    useMutation<UnlikePostMutation>(UNLIKE_POST);

  const { likePostContext, unlikePostContext } = usePostContext();

  useEffect(() => {
    if (likePostResponse.data) {
      likePostContext({ isLiked: likePostResponse.data.likePost });
    }
  }, [likePostContext, likePostResponse.data]);

  useEffect(() => {
    if (unlikePostResponse.data) {
      unlikePostContext({
        isLiked: unlikePostResponse.data.unlikePost,
      });
    }
  }, [unlikePostContext, unlikePostResponse.data]);

  const likePost = useCallback(
    (postId: string) => {
      likePostMutation({
        variables: {
          postId,
        },
      });
    },
    [likePostMutation],
  );

  const unlikePost = useCallback(
    (postId: string) => {
      unlikePostMutation({
        variables: {
          postId,
        },
      });
    },
    [unlikePostMutation],
  );

  return { likePost, unlikePost };
}
