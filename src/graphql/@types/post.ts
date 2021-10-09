import type { Post } from "@t/post";

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
