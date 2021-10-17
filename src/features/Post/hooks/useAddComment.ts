import { useMutation } from "@apollo/client";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { UseAddCommentProps } from "../@types";
import { usePostContext } from "@context/PostContext";
import { AddPostCommentMutation } from "@graphql/@types/postComment";
import { ADD_POST_COMMENT } from "@graphql/postComment";
import { NewComment } from "@t/postComment";

export function useAddComment(props: UseAddCommentProps) {
  const { id } = props;
  const formMethods = useForm<Pick<NewComment, "content">>({
    mode: "all",
  });

  const { addNewCommentToComments, removeParentForNewComment, newComment } =
    usePostContext();

  const [addPostComment, addPostCommentResponse] =
    useMutation<AddPostCommentMutation>(ADD_POST_COMMENT);

  useEffect(() => {
    if (addPostCommentResponse.data) {
      const { reset } = formMethods;
      addNewCommentToComments(addPostCommentResponse.data.addPostComment);
      reset();
    }
  }, [addPostCommentResponse.data]);

  const onSubmit = useCallback(
    (data: NewComment) => {
      addPostComment({
        variables: {
          ...data,
          postId: id,
          parentId: newComment?.parent?.id,
        },
      });
    },
    [id, newComment?.parent?.id],
  );

  const removeReply = useCallback(() => {
    removeParentForNewComment();
  }, [newComment]);

  return { onSubmit, formMethods, parent: newComment?.parent, removeReply };
}
