import type { CommentsWithPagination } from "./comment";
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
  comments?: CommentsWithPagination;
  createdAt: string;
  updatedAt: string;
};

export type PostsWithPagination = {
  posts: Post[];
  pagination: Pagination;
};
