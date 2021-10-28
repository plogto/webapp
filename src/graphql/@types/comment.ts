import { Comment, CommentsWithPagination } from "@t/comment";

export type AddCommentMutation = {
  addComment: Comment;
};

export type DeleteCommentMutation = {
  deleteComment: Comment;
};

export type GetCommentsQuery = {
  getComments: CommentsWithPagination;
};
