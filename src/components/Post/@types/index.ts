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
  size?: HeaderSize;
  showUserInfo?: boolean;
  showMoreButton?: boolean;
  onMoreButton?: () => void;
  user: User;
  className?: string;
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
  id: Post["id"];
  size?: FooterSize;
  isLiked?: Post["isLiked"];
  isSaved?: Post["isSaved"];
};

export type UsePostLikeProps = {
  id: Post["id"];
};

export type UsePostSaveProps = {
  id: Post["id"];
};
