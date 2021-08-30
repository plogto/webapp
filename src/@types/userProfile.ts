import { Dispatch, SetStateAction } from "react";
import { Post } from "./post";
import { User } from "./user";

export type UserProfile = {
  user?: User;
  posts?: Post[];
};

export type SetUserProfile = {
  setUser: Dispatch<SetStateAction<UserProfile["user"]>>;
  setPosts: Dispatch<SetStateAction<UserProfile["posts"]>>;
};
