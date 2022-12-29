import { useCallback } from "react";
import { useMutation } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import type { LikePostMutation } from "@graphql/@types/likedPost";
import { GET_LIKED_POSTS_BY_POST_ID, LIKE_POST } from "@graphql/likedPost";
import { GET_LIKED_POSTS_BY_USERNAME } from "@graphql/post";
import type { UseLikePostProps } from "../Post.types";

export function useLikePost(props: UseLikePostProps) {
  const { postId } = props;
  const [likePostMutation] = useMutation<LikePostMutation>(LIKE_POST);
  const { user } = useAccountContext();

  const likePost = useCallback(() => {
    likePostMutation({
      variables: { postId },
      refetchQueries: [
        { query: GET_LIKED_POSTS_BY_POST_ID, variables: { postId } },
        {
          query: GET_LIKED_POSTS_BY_USERNAME,
          variables: { username: user?.username },
        },
      ],
    });
  }, [likePostMutation, postId, user?.username]);

  return { likePost };
}
