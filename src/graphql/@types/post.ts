import type { Post } from "@/@types/post";

export type GetUserPostsByUsernameQuery = {
  getUserPostsByUsername: {
    posts: Post[];
  };
};
