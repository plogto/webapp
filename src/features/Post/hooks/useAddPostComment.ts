import { useMutation } from "@apollo/client";
import { useState, useCallback, useEffect } from "react";
import { UseAddPostCommentProps } from "../@types";
import { AddPostCommentMutation } from "@graphql/@types/postComment";
import { ADD_POST_COMMENT } from "@graphql/postComment";

export function useAddPostComment(props: UseAddPostCommentProps) {
  const { id, parent } = props;
  const [comment, setComment] = useState("");

  const [addPostComment, addPostCommentResponse] =
    useMutation<AddPostCommentMutation>(ADD_POST_COMMENT);

  useEffect(() => {
    if (addPostCommentResponse.data) {
      setComment("");
    }
  }, [addPostCommentResponse.data]);

  const onSend = useCallback(() => {
    addPostComment({
      variables: {
        postId: id,
        parentId: parent?.id,
        content: comment,
      },
    });
  }, [id, comment]);

  return { comment, setComment, onSend };
}
