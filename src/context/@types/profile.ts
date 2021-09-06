import { Dispatch, SetStateAction } from "react";
import { Post } from "@/@types/post";
import { User } from "@/@types/user";

export type Profile = {
  user?: User;
  posts?: Post[];
};

export type SetProfile = {
  setUser: Dispatch<SetStateAction<Profile["user"]>>;
  setPosts: Dispatch<SetStateAction<Profile["posts"]>>;
};
