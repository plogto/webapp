import type { Pagination } from "./pagination";

export type User = {
  id: string;
  username: string;
  avatar?: string;
  background?: string;
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
