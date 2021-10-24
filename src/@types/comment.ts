import { CommentLike } from "./commentLike";
import { Pagination } from "./pagination";
import { Post } from "./post";
import { User } from "./user";

export type OnReply = (comment: Comment) => void;

export type NewComment = {
  content: string;
  parent?: Comment;
};

export type Comment = {
  id: string;
  parent?: Comment;
  user: User;
  post: Post;
  children?: CommentsWithPagination;
  content: string;
  isLiked: CommentLike;
  createdAt: string;
  updatedAt: string;
};

export type CommentsWithPagination = {
  comments: Comment[];
  pagination: Pagination;
};
