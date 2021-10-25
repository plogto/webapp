import { Dispatch, SetStateAction } from "react";
import { NewComment } from "@t/comment";
import type { Post } from "@t/post";

declare global {
  export type PostContext = {
    post?: Post;
    newComment?: NewComment;
  };

  export type SetPostContext = {
    setPost: Dispatch<SetStateAction<PostContext["post"]>>;
    setNewComment: Dispatch<SetStateAction<PostContext["newComment"]>>;
  };
}
