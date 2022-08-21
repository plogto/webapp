import type { LikedPost } from "@t/likedPost";

export interface LikePostMutation {
  likePost: LikedPost;
}

export interface UnlikePostMutation {
  unlikePost: LikedPost;
}
