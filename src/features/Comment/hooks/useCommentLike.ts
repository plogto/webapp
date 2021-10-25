import { useMutation } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";
import { UseCommentLikeProps } from "../@types";
import {
  LikeCommentMutation,
  UnlikeCommentMutation,
} from "@graphql/@types/commentLike";
import { LIKE_COMMENT, UNLIKE_COMMENT } from "@graphql/commentLike";

export function useCommentLike(props: UseCommentLikeProps) {
  const { id, isLiked: initialIsLiked } = props;
  const [isLiked, setIsLiked] = useState<boolean>(!!initialIsLiked);
  const variables = { commentId: id };

  const [likeCommentMutation, likeCommentResponse] =
    useMutation<LikeCommentMutation>(LIKE_COMMENT);
  const [unlikeCommentMutation, unlikeCommentResponse] =
    useMutation<UnlikeCommentMutation>(UNLIKE_COMMENT);

  useEffect(() => {
    setIsLiked(!!initialIsLiked);
  }, [initialIsLiked]);

  useEffect(() => {
    if (likeCommentResponse.data) {
      setIsLiked(!!likeCommentResponse.data?.likeComment);
    }
  }, [likeCommentResponse.data]);

  useEffect(() => {
    if (unlikeCommentResponse.data) {
      setIsLiked(!unlikeCommentResponse.data?.unlikeComment);
    }
  }, [unlikeCommentResponse.data]);

  const likeComment = useCallback(() => {
    likeCommentMutation({ variables });
  }, [id]);

  const unlikeComment = useCallback(() => {
    unlikeCommentMutation({ variables });
  }, [id]);

  return { likeComment, unlikeComment, isLiked };
}
