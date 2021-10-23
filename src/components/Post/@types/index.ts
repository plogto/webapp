import { UseFormReturn } from "react-hook-form";
import { NewComment, Comment } from "@t/comment";
import { Post } from "@t/post";
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
  showCommentsCounter?: boolean;
};

export type UsePostLikeProps = {
  id: Post["id"];
  isLiked?: PostLike;
};

export type UsePostSaveProps = {
  id: Post["id"];
  isSaved?: PostSave;
};

export type AddCommentProps = {
  onSubmit: (data: NewComment) => void;
  formMethods: UseFormReturn<Pick<NewComment, "content">>;
  parent?: Comment;
  removeReply: () => void;
};
