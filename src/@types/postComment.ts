import { Pagination } from "./pagination";
import { Post } from "./post";
import { User } from "./user";

export type OnReply = (comment: PostComment) => void;

export type NewComment = {
  content: string;
  parent?: PostComment;
};

export type PostComment = {
  id: string;
  user: User;
  post: Post;
  children?: PostCommentsWithPagination;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type PostCommentsWithPagination = {
  postComments: PostComment[];
  pagination: Pagination;
};
