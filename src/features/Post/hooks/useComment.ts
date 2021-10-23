import { useCallback } from "react";
import { usePostContext } from "@context/PostContext";
import { Comment } from "@t/comment";

export function useComment() {
  const { addParentForNewComment } = usePostContext();

  const onReply = useCallback((comment: Comment) => {
    addParentForNewComment(comment);
  }, []);

  return { onReply };
}
