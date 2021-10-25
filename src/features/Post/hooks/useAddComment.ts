import { useMutation } from "@apollo/client";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { UseAddCommentProps } from "../@types";
import { usePostContext } from "@context/PostContext";
import { AddCommentMutation } from "@graphql/@types/comment";
import { ADD_POST_COMMENT } from "@graphql/comment";
import { NewComment } from "@t/comment";

export function useAddComment(props: UseAddCommentProps) {
  const { id } = props;
  const formMethods = useForm<Pick<NewComment, "content">>({
    mode: "all",
  });

  const { addNewCommentToComments, removeParentForNewComment, newComment } =
    usePostContext();

  const [addComment, addCommentResponse] =
    useMutation<AddCommentMutation>(ADD_POST_COMMENT);

  useEffect(() => {
    if (addCommentResponse.data) {
      const { reset } = formMethods;
      addNewCommentToComments(addCommentResponse.data.addComment);
      reset();
    }
  }, [addCommentResponse.data]);

  const onSubmit = useCallback(
    (data: NewComment) => {
      addComment({
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
