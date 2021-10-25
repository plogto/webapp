import { Comment, CommentsWithPagination } from "@t/comment";

export type AddCommentMutation = {
  addComment: Comment;
};

export type GetCommentsQuery = {
  getComments: CommentsWithPagination;
};
