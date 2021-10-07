import { PostComment, PostCommentsWithPagination } from "@t/postComment";

export type AddPostCommentMutation = {
  addPostComment: PostComment;
};

export type GetPostCommentsQuery = {
  getPostComments: PostCommentsWithPagination;
};
