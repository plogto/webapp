import type { Post } from "@t/post";
import type { Dispatch, SetStateAction } from "react";

declare global {
  export type PostContext = {
    post?: Post;
  };

  export type SetPostContext = {
    setPost: Dispatch<SetStateAction<PostContext["post"]>>;
  };
}

export type LikePostContextProps = {
  isLiked: Post["isLiked"];
};

export type SavePostContextProps = {
  isSaved: Post["isSaved"];
};
