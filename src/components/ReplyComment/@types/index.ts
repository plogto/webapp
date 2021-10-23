import { OnReply, Comment } from "@t/comment";

export type ReplyCommentProps = {
  comment: Comment;
  onReply: OnReply;
};
