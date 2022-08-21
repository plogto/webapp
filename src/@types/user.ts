import { PrimaryColor, BackgroundColor } from "@enums";
import type { WithPageInfo } from "@t";
import type { Attachment } from "./attachment";

export interface User {
  id: string;
  username: string;
  backgroundColor: BackgroundColor;
  primaryColor: PrimaryColor;
  avatar?: Attachment;
  background?: Attachment;
  fullName: string;
  email: string;
  bio?: string;
  isPrivate?: boolean;
  isVerified?: boolean;
  connectionStatus?: number;
  followersCount?: number;
  followingCount?: number;
  postsCount?: number;
  followRequestsCount?: number;
  createdAt?: string;
  updatedAt?: string;
}

export type UsersWithPageInfo = WithPageInfo<User>;
