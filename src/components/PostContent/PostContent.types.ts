import type { DateType } from "@enums";
import type { Post } from "@t/post";
import type { ContentSize, DateSize } from "@t/size";
import type { User } from "@t/user";

export interface PostContentProps {
  id: Post["id"];
  user?: {
    fullName: User["fullName"];
    username: User["username"];
    isVerified?: User["isVerified"];
  };
  url?: Post["url"];
  isClickable?: boolean;
  size?: ContentSize;
  content: Post["content"];
  attachment?: Post["attachment"];
  likes: Post["likes"];
  showHeader?: boolean;
  dateSize?: DateSize;
  dateType: DateType;
  createdAt: string;
  updatedAt: string;
  className?: string;
}
