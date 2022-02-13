import type { Pagination } from "./pagination";
import type { PostLike, PostLikesWithPagination } from "./postLike";
import type { PostSave } from "./postSave";
import type { User } from "./user";

export type Post = {
  id: string;
  url: string;
  user: User;
  content: string;
  isLiked?: PostLike;
  isSaved?: PostSave;
  likes?: PostLikesWithPagination;
  replies?: PostsWithPagination;
  createdAt: string;
  updatedAt: string;
};

export type PostsWithPagination = {
  posts: Post[];
  pagination: Pagination;
};

export type NewReply = {
  postId: string;
  content: string;
  attachment?: string;
  status?: string;
};

export type PostSize = "small" | "normal";
export type PostType = "post" | "reply";
export type RepliesView = "none" | "quick" | "complete" | "children";
