import { Pagination } from "./pagination";
import { Post } from "./post";
import { User } from "./user";

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
