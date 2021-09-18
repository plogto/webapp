import type { Post } from "@t/post";

export type GetUserPostsByUsernameQuery = {
  getUserPostsByUsername: {
    posts: Post[];
  };
};

export type GetUserPostsByTagNameQuery = {
  getUserPostsByTagName: {
    posts: Post[];
  };
};
