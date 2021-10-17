import { OnReply, PostComment } from "@t/postComment";

export type ReplyCommentProps = {
  comment: PostComment;
  onReply: OnReply;
};
