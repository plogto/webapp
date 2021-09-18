import { Dispatch, SetStateAction } from "react";
import type { Post } from "@t/post";
import type { User } from "@t/user";

export type Profile = {
  user?: User;
  posts?: Post[];
};

export type SetProfile = {
  setUser: Dispatch<SetStateAction<Profile["user"]>>;
  setPosts: Dispatch<SetStateAction<Profile["posts"]>>;
};
