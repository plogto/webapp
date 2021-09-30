import { Post } from "@t/post";
import { PostLike } from "@t/postLike";

export type FooterPostCardProps = {
  id: Post["id"];
  isLiked?: PostLike;
};

export type UsePostLikeProps = {
  id: Post["id"];
  isLiked?: PostLike;
};
