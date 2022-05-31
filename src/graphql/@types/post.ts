import type { Pagination } from "@t/pagination";
import type { Post, NewReply } from "@t/post";
import type { User } from "@t/user";

export interface GetPostByUrlQuery {
  getPostByUrl: Post;
}

export interface GetPostsByUsernameQuery {
  getPostsByUsername: {
    posts: Post[];
    pagination: Pagination;
  };
}
export interface GetPostsByUsernameQueryRequest {
  username: User["username"];
  page?: number;
  limit?: number;
}

export interface GetPostsByTagNameQueryRequest {
  tagName: string;
  page?: number;
  limit?: number;
}
export interface GetPostsByTagNameQuery {
  getPostsByTagName: {
    posts: Post[];
    pagination: Pagination;
  };
}
export interface GetSavedPostsQuery {
  getSavedPosts: {
    posts: Post[];
    pagination: Pagination;
  };
}
export interface GetSavedPostsQueryRequest {
  page?: number;
  limit?: number;
}

export interface AddPostMutationRequest {
  postId?: string;
  content?: Post["content"];
  attachment?: string[];
}

export interface AddPostMutation {
  addPost: Post;
}

export interface ReplyPostMutation {
  replyPost: NewReply;
}

export interface DeletePostMutation {
  deletePost: Post;
}
