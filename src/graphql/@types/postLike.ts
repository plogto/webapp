import { PostLike } from "@t/postLike";

export type LikePostQuery = {
  likePost: PostLike;
};

export type UnlikePostQuery = {
  unlikePost: PostLike;
};
