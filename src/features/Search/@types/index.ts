import type { Tag } from "@t/tag";
import type { User } from "@t/user";

type SearchUser = {
  users: User[];
};

type SearchTag = {
  tags: Tag[];
};

export type SearchFilters = "users" | "tags";

export type SearchForm = {
  expression: string;
};

export type SearchResult = {
  user: SearchUser;
  tag: SearchTag;
};
