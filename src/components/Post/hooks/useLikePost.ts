import { useCallback } from "react";
import { useMutation } from "@apollo/client";
import type { LikePostMutation } from "@graphql/@types/postLike";
import { LIKE_POST } from "@graphql/postLike";
import type { UseLikePostProps } from "../Post.types";

export function useLikePost(props: UseLikePostProps) {
  const { postId } = props;
  const [likePostMutation] = useMutation<LikePostMutation>(LIKE_POST);

  const likePost = useCallback(() => {
    likePostMutation({
      variables: { postId },
    });
  }, [likePostMutation, postId]);

  return { likePost };
}
