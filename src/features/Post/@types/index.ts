import { Comment } from "@t/comment";
import { Post } from "@t/post";
import { PostLike } from "@t/postLike";
import { PostSave } from "@t/postSave";

export type UsePostLikeProps = {
  id?: Post["id"];
  isLiked?: PostLike;
};

export type UsePostSaveProps = {
  id?: Post["id"];
  isSaved?: PostSave;
};

export type UseAddCommentProps = {
  id?: Post["id"];
  parent?: Comment;
};
