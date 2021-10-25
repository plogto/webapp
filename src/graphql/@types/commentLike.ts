import { CommentLike } from "@t/commentLike";

export type LikeCommentMutation = {
  likeComment: CommentLike;
};

export type UnlikeCommentMutation = {
  unlikeComment: CommentLike;
};
