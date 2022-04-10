import { MenuProps } from "@components/Menu/@types";
import { DateType } from "@enums";
import type { Post, PostType } from "@t/post";
import type { ContentSize, DateSize, FooterSize, HeaderSize } from "@t/size";
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
  className?: string;
  filterMenuItems: (items: MenuProps["items"]) => MenuProps["items"];
};

export type ContentPostProps = {
  user?: {
    fullName: User["fullName"];
    username: User["username"];
  };
  url?: Post["url"];
  isClickable?: boolean;
  size?: ContentSize;
  content: Post["content"];
  attachment?: Post["attachment"];
  showHeader?: boolean;
  dateSize: DateSize;
  dateType: DateType;
  createdAt: string;
  updatedAt: string;
  className?: string;
};

export type DatePostProps = {
  size?: DateSize;
  type: DateType;
  createdAt: string;
  updatedAt: string;
};

export type FooterPostProps = {
  postId: Post["id"];
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
