import { useMutation } from "@apollo/client";
import { useState, useCallback, useMemo, useEffect } from "react";
import { UseCommentProps } from "../@types";
import { DeleteModal } from "@components/Modal";
import { useAccountContext } from "@context/AccountContext";
import { useModalContext } from "@context/ModalContext";
import { usePostContext } from "@context/PostContext";
import { DeleteCommentMutation } from "@graphql/@types/comment";
import { DELETE_COMMENT } from "@graphql/comment";
import { Comment } from "@t/comment";
import { useCommentLike } from ".";

export function useComment(props: UseCommentProps) {
  const { id, user } = props;
  const [showReplies, setShowReplies] = useState(false);
  const { addParentForNewComment, removeCommentFromComments } =
    usePostContext();
  const { user: userAccount } = useAccountContext();
  const { openModal, setContent } = useModalContext();
  const { likeComment, unlikeComment, isLiked } = useCommentLike(props);
  const showDeleteButton = useMemo(
    () => userAccount?.id == user.id,
    [user.id, userAccount?.id],
  );

  const [deleteComment, deleteCommentResponse] =
    useMutation<DeleteCommentMutation>(DELETE_COMMENT);

  const onReply = useCallback((comment: Comment) => {
    addParentForNewComment(comment);
  }, []);

  const onDelete = useCallback(() => {
    openModal();
    setContent(
      <DeleteModal
        onDelete={() =>
          deleteComment({
            variables: {
              commentId: id,
            },
          })
        }
      />,
    );
  }, [id]);

  useEffect(() => {
    if (deleteCommentResponse.data) {
      removeCommentFromComments(deleteCommentResponse.data.deleteComment);
    }
  }, [deleteCommentResponse]);

  return {
    onReply,
    showReplies,
    setShowReplies,
    likeComment,
    unlikeComment,
    isLiked,
    showDeleteButton,
    onDelete,
  };
}
