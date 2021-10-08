import type { Post } from "@t/post";

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
