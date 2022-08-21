import type { WithPageInfo } from ".";
import type { Post } from "./post";
import type { User } from "./user";

export interface LikedPost {
  id: string;
  user: User;
  post: Post;
  createdAt: string;
  updatedAt: string;
}

export type LikedPostsWithPageInfo = WithPageInfo<LikedPost>;
