import { Dispatch, SetStateAction } from "react";
import { PostComment } from "@t/postComment";

export type AddPostCommentProps = {
  onSend: () => void;
  setComment: Dispatch<SetStateAction<PostComment["content"]>>;
  comment: string;
};
