import { Dispatch, SetStateAction } from "react";
import { Post } from "@t/post";

declare global {
  export type SavedPostsContext = {
    savedPosts: Post[];
  };

  export interface SetSavedPostsContext {
    setSavedPosts: Dispatch<SetStateAction<SavedPostsContext["savedPosts"]>>;
  }
}
