import { OnReply, Comment } from "@t/comment";

export type CommentProps = {
  type?: "COMMENT" | "REPLY";
  comment: Comment;
  onReply: OnReply;
  isLiked?: boolean;
  likeComment?: () => void;
  unlikeComment?: () => void;
};
