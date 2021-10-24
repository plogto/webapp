import { Comment } from "./comment";
import { Pagination } from "./pagination";
import { User } from "./user";

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
