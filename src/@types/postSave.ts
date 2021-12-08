import type { Pagination } from "./pagination";
import type { Post } from "./post";
import type { User } from "./user";

export type PostSave = {
  id: string;
  user: User;
  post: Post;
  createdAt: string;
  updatedAt: string;
};

export type PostSavesWithPagination = {
  postSaves: PostSave[];
  pagination: Pagination;
};
