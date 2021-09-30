import { Pagination } from "./pagination";
import { PostLike, PostLikesWithPagination } from "./postLike";
import { User } from "./user";

export type Post = {
  id: string;
  user: User;
  content: string;
  isLiked?: PostLike;
  likes?: PostLikesWithPagination;
  createdAt: string;
  updatedAt: string;
};

export type PostsWithPagination = {
  posts: Post[];
  pagination: Pagination;
};
