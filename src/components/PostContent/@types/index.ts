import type { DateType } from "@enums";
import type { Post } from "@t/post";
import type { ContentSize, DateSize } from "@t/size";
import type { User } from "@t/user";

export type PostContentProps = {
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
  dateSize?: DateSize;
  dateType: DateType;
  createdAt: string;
  updatedAt: string;
  className?: string;
};
