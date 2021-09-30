import { Dispatch, SetStateAction } from "react";
import type { Post } from "@t/post";
import type { User } from "@t/user";

declare global {
  export type ProfileContext = {
    user?: User;
    posts?: Post[];
  };

  export type SetProfileContext = {
    setUser: Dispatch<SetStateAction<ProfileContext["user"]>>;
    setPosts: Dispatch<SetStateAction<ProfileContext["posts"]>>;
  };
}
