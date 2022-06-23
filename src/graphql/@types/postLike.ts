import type { PostLike } from "@t/postLike";

export interface LikePostMutation {
  likePost: PostLike;
}

export interface UnlikePostMutation {
  unlikePost: PostLike;
}
