import type { IconNames } from "@components/Icon";
import type { Tag } from "@t/tag";
import type { User } from "@t/user";

type SearchUser = {
  users: User[];
};

type SearchTag = {
  tags: Tag[];
};

export type Filter = {
  title: string;
  active: boolean;
  icon: IconNames;
  onClick: () => void;
};

export type SearchFilters = "users" | "tags";

export type SearchForm = {
  expression: string;
};

export type SearchResult = {
  user: SearchUser;
  tag: SearchTag;
};
