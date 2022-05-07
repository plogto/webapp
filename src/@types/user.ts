import { PrimaryColor, BackgroundColor } from "@enums";
import type { Attachment } from "./attachment";
import type { Pagination } from "./pagination";

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

export interface UsersWithPagination {
  users: User[];
  pagination: Pagination;
}
