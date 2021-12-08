import type { Comment } from "./comment";
import type { Pagination } from "./pagination";
import type { User } from "./user";

export type CommentLike = {
  id: string;
  user: User;
  post: Comment;
  createdAt: string;
  updatedAt: string;
};

export type CommentLikesWithPagination = {
  postLikes: CommentLike[];
  pagination: Pagination;
};
