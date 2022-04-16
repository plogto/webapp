import type { Attachment } from "./attachment";
import type { Pagination } from "./pagination";

export type User = {
  id: string;
  username: string;
  avatar?: Attachment;
  background?: Attachment;
  fullName: string;
  email: string;
  bio?: string;
  isPrivate?: boolean;
  connectionStatus?: number;
  followersCount?: number;
  followingCount?: number;
  postsCount?: number;
  followRequestsCount?: number;
  createdAt?: string;
  updatedAt?: string;
};

export type UsersWithPagination = {
  users: User[];
  pagination: Pagination;
};
