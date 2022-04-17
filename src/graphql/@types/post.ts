import type { Post, NewReply } from "@t/post";

export type GetPostByUrlQuery = {
  getPostByUrl: Post;
};

export type GetPostsByUsernameQuery = {
  getPostsByUsername: {
    posts: Post[];
  };
};

export type GetPostsByTagNameQuery = {
  getPostsByTagName: {
    posts: Post[];
  };
};

export type AddPostMutationRequest = {
  postId?: string;
  content?: Post["content"];
  attachment?: string[];
};

export type AddPostMutation = {
  addPost: Post;
};

export type ReplyPostMutation = {
  replyPost: NewReply;
};

export type DeletePostMutation = {
  deletePost: Post;
};
