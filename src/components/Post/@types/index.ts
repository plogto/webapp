import { AddPostCommentProps } from "@components/AddPostComment/@types";
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
  showAddPostComment?: boolean;
  comments?: PostCommentsWithPagination;
  addPostComment: AddPostCommentProps;
};

export type UsePostLikeProps = {
  id: Post["id"];
  isLiked?: PostLike;
};

export type UsePostSaveProps = {
  id: Post["id"];
  isSaved?: PostSave;
};
