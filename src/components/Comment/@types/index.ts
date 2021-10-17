import { OnReply, PostComment } from "@t/postComment";

export type CommentProps = {
  comment: PostComment;
  onReply: OnReply;
};
