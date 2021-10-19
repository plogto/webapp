import { useCallback } from "react";
import { usePostContext } from "@context/PostContext";
import { PostComment } from "@t/postComment";

export function usePostComment() {
  const { addParentForNewComment } = usePostContext();

  const onReply = useCallback((comment: PostComment) => {
    addParentForNewComment(comment);
  }, []);

  return { onReply };
}
