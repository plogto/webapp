import { DateType } from "@enums";
import type { Post, PostType } from "@t/post";
import type { ContentSize, DateSize, FooterSize, HeaderSize } from "@t/size";
import type { User } from "@t/user";

export type UsePostProps = {
  type: PostType;
  post: Post;
  actions?: ActionsPostProps;
  repliesActions?: ActionsPostProps;
};

export type PostProps = {
  type: PostType;
  post: Post;
  actions?: ActionsPostProps;
  repliesActions?: ActionsPostProps;
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

export type ActionsPostProps = {
  likePost?: () => void;
  unlikePost?: () => void;
  savePost?: () => void;
  unsavePost?: () => void;
};

export type FooterPostProps = {
  size?: FooterSize;
  isLiked?: Post["isLiked"];
  isSaved?: Post["isSaved"];
} & ActionsPostProps;
