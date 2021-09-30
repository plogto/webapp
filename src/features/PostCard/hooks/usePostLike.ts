import { useMutation } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";
import { UsePostLikeProps } from "../@types";
import { LikePostMutation, UnlikePostMutation } from "@graphql/@types/postLike";
import { LIKE_POST, UNLIKE_POST } from "@graphql/postLike";

export function usePostLike(props: UsePostLikeProps) {
  const { id, isLiked: initialIsLiked } = props;
  const [isLiked, setIsLiked] = useState<boolean>(!!initialIsLiked);
  const variables = { postId: id };

  const [likePostMutation, likePostResponse] =
    useMutation<LikePostMutation>(LIKE_POST);
  const [unlikePostMutation, unlikePostResponse] =
    useMutation<UnlikePostMutation>(UNLIKE_POST);

  useEffect(() => {
    if (likePostResponse.data) {
      setIsLiked(!!likePostResponse.data?.likePost);
    }
  }, [likePostResponse.data]);

  useEffect(() => {
    if (unlikePostResponse.data) {
      setIsLiked(!unlikePostResponse.data?.unlikePost);
    }
  }, [unlikePostResponse.data]);

  const likePost = useCallback(() => {
    likePostMutation({ variables });
  }, [id]);

  const unlikePost = useCallback(() => {
    unlikePostMutation({ variables });
  }, [id]);

  return { likePost, unlikePost, isLiked };
}
