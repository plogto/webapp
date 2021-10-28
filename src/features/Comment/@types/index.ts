import { Comment } from "@t/comment";
import { CommentLike } from "@t/commentLike";

export type CommentProps = {
  type?: "COMMENT" | "REPLY";
  comment: Comment;
};

export type UseCommentProps = {
  id?: Comment["id"];
  isLiked?: CommentLike;
  user: Comment["user"];
};

export type UseCommentLikeProps = {
  id?: Comment["id"];
  isLiked?: CommentLike;
};
