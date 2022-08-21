import type { TagsWithPageInfo } from "@t/tag";
import type { UsersWithPageInfo } from "@t/user";

export interface TagsSuggestionsProps {
  tags: TagsWithPageInfo;
  handleClickOnTag: (tagName: string) => void;
}

export interface SuggestionsProps extends TagsSuggestionsProps {
  active: "users" | "tags" | "none";
  users: UsersWithPageInfo;
}
