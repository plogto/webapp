import type { Dispatch, SetStateAction } from "react";
import type { Tag } from "@t/tag";
import type { User } from "@t/user";

declare global {
  export interface AddPostContext {
    suggestions: {
      active: "users" | "tags" | "none";
      users: User[];
      tags: Tag[];
    };
  }

  export interface SetAddPostContext {
    setSuggestions: Dispatch<SetStateAction<AddPostContext["suggestions"]>>;
  }
}
