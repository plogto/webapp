import { MenuProps } from "@components/Menu/@types";
import type { Post, PostType } from "@t/post";
import type { FooterSize, HeaderSize } from "@t/size";
import type { User } from "@t/user";

export type UsePostProps = {
  type: PostType;
  post: Post;
};

export type PostProps = {
  type: PostType;
  post: Post;
  className?: string;
};

export type HeaderPostProps = {
  postId: Post["id"];
  url: Post["url"];
  user: User;
  size?: HeaderSize;
  showUserInfo?: boolean;
  showMoreButton?: boolean;
  className?: string;
  filterMenuItems: (items: MenuProps["items"]) => MenuProps["items"];
};

export type FooterPostProps = {
  postId: Post["id"];
  url: Post["url"];
  size?: FooterSize;
  isLiked?: Post["isLiked"];
  isSaved?: Post["isSaved"];
};

export type UseLikePostProps = {
  postId: Post["id"];
};

export type UseSavePostProps = {
  postId: Post["id"];
};

export type UseDeletePostProps = {
  postId: Post["id"];
};
