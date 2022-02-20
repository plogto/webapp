import type { Post } from "@t/post";
import type { PostLike } from "@t/postLike";
import type { PostSave } from "@t/postSave";

export type UsePostProps = {
  post?: Post;
};

export type UsePostLikeProps = {
  id?: Post["id"];
  isLiked?: PostLike;
};

export type UsePostSaveProps = {
  id?: Post["id"];
  isSaved?: PostSave;
};
