import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import { LIKE_POST } from "@graphql/postLike";
import type { UsePostLikeProps } from "../@types";
import type { LikePostMutation } from "@graphql/@types/postLike";

export function usePostLike(props: UsePostLikeProps) {
  const { id } = props;
  const [likePostMutation] = useMutation<LikePostMutation>(LIKE_POST);

  const likePost = useCallback(() => {
    likePostMutation({
      variables: { postId: id },
    });
  }, [id, likePostMutation]);

  return { likePost };
}
