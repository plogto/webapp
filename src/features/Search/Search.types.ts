import type { IconNames } from "@components/Icon";
import type { TagsWithPageInfo } from "@t/tag";
import type { UsersWithPageInfo } from "@t/user";

export interface Filter {
  title: string;
  active: boolean;
  icon: IconNames;
  onClick: () => void;
}

export type SearchFilters = "users" | "tags";

export interface SearchForm {
  expression: string;
}

export interface SearchResult {
  user: UsersWithPageInfo;
  tag: TagsWithPageInfo;
}
