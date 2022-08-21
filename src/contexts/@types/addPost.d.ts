import type { Dispatch, SetStateAction } from "react";
import type { TagsWithPageInfo } from "@t/tag";
import type { UsersWithPageInfo } from "@t/user";

declare global {
  export interface AddPostContext {
    suggestions: {
      active: "users" | "tags" | "none";
      users: UsersWithPageInfo;
      tags: TagsWithPageInfo;
    };
  }

  export interface SetAddPostContext {
    setSuggestions: Dispatch<SetStateAction<AddPostContext["suggestions"]>>;
  }
}
