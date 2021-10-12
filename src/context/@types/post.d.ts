import { Dispatch, SetStateAction } from "react";
import type { Post } from "@t/post";

declare global {
  export type PostContext = {
    post?: Post;
  };

  export type SetPostContext = {
    setPost: Dispatch<SetStateAction<PostContext["post"]>>;
  };
}
