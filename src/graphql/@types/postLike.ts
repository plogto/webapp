import { PostLike } from "@t/postLike";

export type LikePostMutation = {
  likePost: PostLike;
};

export type UnlikePostMutation = {
  unlikePost: PostLike;
};
