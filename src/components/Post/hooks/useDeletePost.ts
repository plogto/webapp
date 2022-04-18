import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import { useAccountContext } from "@contexts/AccountContext";
import { DELETE_POST, GET_POSTS_BY_USERNAME } from "@graphql/post";
import { GET_TRENDS } from "@graphql/tag";
import type { UseDeletePostProps } from "../@types";
import type { DeletePostMutation } from "@graphql/@types/post";

export function useDeletePost(props: UseDeletePostProps) {
  const { postId } = props;
  const { user } = useAccountContext();
  const [deletePostMutation] = useMutation<DeletePostMutation>(DELETE_POST, {});

  const deletePost = useCallback(() => {
    deletePostMutation({
      variables: { postId },
      refetchQueries: [
        { query: GET_TRENDS },
        {
          query: GET_POSTS_BY_USERNAME,
          variables: { username: user?.username },
        },
      ],
    });
  }, [deletePostMutation, postId, user?.username]);

  return { deletePost };
}
