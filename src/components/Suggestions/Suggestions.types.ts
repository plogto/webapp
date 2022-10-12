import type { TagsWithPageInfo } from "@t/tag";
import type { UsersWithPageInfo } from "@t/user";

interface Suggestions {
  handleClickOnSuggestionItem: (value: string) => void;
}

export interface TagsSuggestionsProps extends Suggestions {
  tags: TagsWithPageInfo;
}
export interface UsersSuggestionsProps extends Suggestions {
  users: UsersWithPageInfo;
}

export interface SuggestionsProps
  extends TagsSuggestionsProps,
    UsersSuggestionsProps {
  active: "users" | "tags" | "none";
}
