import type { Post } from "@/@types/post";

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
