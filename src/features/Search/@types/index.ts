import type { IconNames } from "@components/Icon";
import type { Tag } from "@t/tag";
import type { User } from "@t/user";

interface SearchUser {
  users: User[];
}

interface SearchTag {
  tags: Tag[];
}

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
  user: SearchUser;
  tag: SearchTag;
}
