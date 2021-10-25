import { useState, useCallback } from "react";
import { UseCommentProps } from "../@types";
import { usePostContext } from "@context/PostContext";
import { Comment } from "@t/comment";
import { useCommentLike } from ".";

export function useComment(props: UseCommentProps) {
  const [showReplies, setShowReplies] = useState(false);
  const { addParentForNewComment } = usePostContext();

  const { likeComment, unlikeComment, isLiked } = useCommentLike(props);

  const onReply = useCallback((comment: Comment) => {
    addParentForNewComment(comment);
  }, []);

  return {
    onReply,
    showReplies,
    setShowReplies,
    likeComment,
    unlikeComment,
    isLiked,
  };
}
