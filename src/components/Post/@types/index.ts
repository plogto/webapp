import { Post } from "@t/post";
import { PostCommentsWithPagination } from "@t/postComment";
import { PostLike } from "@t/postLike";
import { PostSave } from "@t/postSave";

export type FooterPostProps = {
  id: Post["id"];
  isLiked?: boolean;
  likePost?: () => void;
  unlikePost?: () => void;
  isSaved?: boolean;
  savePost?: () => void;
  unsavePost?: () => void;
  commentsCounter?: number;
  showComments?: boolean;
  comments?: PostCommentsWithPagination;
};

export type UsePostLikeProps = {
  id: Post["id"];
  isLiked?: PostLike;
};

export type UsePostSaveProps = {
  id: Post["id"];
  isSaved?: PostSave;
};
