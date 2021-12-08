import type { Pagination } from "./pagination";
import type { Post } from "./post";
import type { User } from "./user";

export type PostLike = {
  id: string;
  user: User;
  post: Post;
  createdAt: string;
  updatedAt: string;
};

export type PostLikesWithPagination = {
  postLikes: PostLike[];
  pagination: Pagination;
};
