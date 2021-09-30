import { Pagination } from "./pagination";
import { Post } from "./post";
import { User } from "./user";

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
