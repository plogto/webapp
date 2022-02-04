import type { Pagination } from "./pagination";
import type { User } from "./user";

export type Connection = {
  id: string;
  following: User;
  follower: User;
  status: number;
  createdAt: string;
  updatedAt: string;
};

export type ConnectionsWithPagination = {
  connections: Connection[];
  pagination: Pagination;
};
