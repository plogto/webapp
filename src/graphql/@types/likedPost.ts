import type { LikedPost, LikedPostsWithPageInfo } from "@t/likedPost";
import type { PageInfoRequest } from "@t/pageInfo";
import type { Post } from "@t/post";

export interface LikePostMutation {
  likePost: LikedPost;
}

export interface UnlikePostMutation {
  unlikePost: LikedPost;
}

export interface GetLikedPostsByPostIDQuery {
  getLikedPostsByPostId: LikedPostsWithPageInfo;
}

export interface GetLikedPostsByPostIDQueryRequest extends PageInfoRequest {
  postId: Post["id"];
}
