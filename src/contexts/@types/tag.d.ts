import type { Dispatch, SetStateAction } from "react";
import type { Tag } from "@t/tag";

declare global {
  export interface TagData {
    data?: Tag;
    isLoading?: boolean;
  }

  export interface TagContext {
    tagData: TagData;
    posts: PostData;
  }

  export interface SetTagContext {
    setTagData: Dispatch<SetStateAction<TagContext["tagData"]>>;
    setPosts: Dispatch<SetStateAction<TagContext["posts"]>>;
  }
}
