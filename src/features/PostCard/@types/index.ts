import { Post } from "@t/post";
import { PostLike } from "@t/postLike";
import { PostSave } from "@t/postSave";

export type FooterPostCardProps = {
  id: Post["id"];
  isLiked?: PostLike;
  isSaved?: PostSave;
  commentsCounter?: number;
};

export type UsePostLikeProps = {
  id: Post["id"];
  isLiked?: PostLike;
};

export type UsePostSaveProps = {
  id: Post["id"];
  isSaved?: PostSave;
};
