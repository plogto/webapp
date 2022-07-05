import type { Tag } from "@t/tag";
import type { User } from "@t/user";

export interface TagsSuggestionsProps {
  tags: Tag[];
  handleClickOnTag: (tagName: string) => void;
}

export interface SuggestionsProps extends TagsSuggestionsProps {
  active: "users" | "tags" | "none";
  users: User[];
}
