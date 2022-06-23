import type { MenuProps } from "@components/Menu/Menu.types";
import type { Post, PostType } from "@t/post";
import type { FooterSize, HeaderSize } from "@t/size";
import type { User } from "@t/user";

export interface UsePostProps {
  type: PostType;
  post: Post;
}

export interface PostProps {
  type: PostType;
  post: Post;
  className?: string;
}

export interface HeaderPostProps {
  postId: Post["id"];
  url: Post["url"];
  user: User;
  size?: HeaderSize;
  showUserInfo?: boolean;
  showMoreButton?: boolean;
  className?: string;
  filterMenuItems: (items: MenuProps["items"]) => MenuProps["items"];
}

export interface FooterPostProps {
  postId: Post["id"];
  url: Post["url"];
  size?: FooterSize;
  isLiked?: Post["isLiked"];
  isSaved?: Post["isSaved"];
}

export interface UseLikePostProps {
  postId: Post["id"];
}

export interface UseSavePostProps {
  postId: Post["id"];
}

export interface UseDeletePostProps {
  postId: Post["id"];
}
