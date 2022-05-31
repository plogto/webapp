import type { Dispatch, SetStateAction } from "react";
import type { ProfileActiveTab } from "@enums";
import type { Pagination } from "@t/pagination";
import type { Post } from "@t/post";

declare global {
  export interface PostData {
    data?: Post[];
    pagination?: Pagination;
    isLoading?: boolean;
  }

  export interface ProfileContext {
    activeTab: ProfileActiveTab;
    posts: PostData;
    savedPosts: PostData;
  }

  export interface SetProfileContext {
    setActiveTab: Dispatch<SetStateAction<ProfileContext["activeTab"]>>;
    setPosts: Dispatch<SetStateAction<ProfileContext["posts"]>>;
    setSavedPosts: Dispatch<SetStateAction<ProfileContext["savedPosts"]>>;
  }
}
