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

export type AddPostMutation = {
  addPost: Post;
};

export type ReplyPostMutation = {
  replyPost: NewReply;
};

export type DeletePostMutation = {
  deletePost: Post;
};
