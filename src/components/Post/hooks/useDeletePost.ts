import { useMutation } from "@apollo/client";
import { useCallback } from "react";
import { DELETE_POST } from "@graphql/post";
import type { UseDeletePostProps } from "../@types";
import type { DeletePostMutation } from "@graphql/@types/post";

export function useDeletePost(props: UseDeletePostProps) {
  const { postId } = props;
  const [deletePostMutation] = useMutation<DeletePostMutation>(DELETE_POST);

  const deletePost = useCallback(() => {
    deletePostMutation({
      variables: { postId },
    });
  }, [deletePostMutation, postId]);

  return { deletePost };
}
