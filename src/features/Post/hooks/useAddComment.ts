import { useMutation } from "@apollo/client";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { UseAddCommentProps } from "../@types";
import { AddPostCommentMutation } from "@graphql/@types/postComment";
import { ADD_POST_COMMENT } from "@graphql/postComment";
import { NewComment } from "@t/postComment";

export function useAddComment(props: UseAddCommentProps) {
  const { id } = props;
  const formMethods = useForm<NewComment>({
    mode: "all",
  });

  const [addPostComment, addPostCommentResponse] =
    useMutation<AddPostCommentMutation>(ADD_POST_COMMENT);

  useEffect(() => {
    if (addPostCommentResponse.data) {
      const { reset } = formMethods;
      reset();
    }
  }, [addPostCommentResponse.data]);

  const onSubmit = useCallback(
    (data: NewComment) => {
      addPostComment({
        variables: {
          ...data,
          postId: id,
        },
      });
    },
    [id],
  );

  return { onSubmit, formMethods };
}
