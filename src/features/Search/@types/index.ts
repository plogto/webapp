import { User } from "@/@types/user";

type SearchUser = {
  users: User[];
};

export type SearchForm = {
  expression: string;
};

export type SearchResult = {
  user: SearchUser;
};
