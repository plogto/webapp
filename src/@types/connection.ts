import type { Pagination } from "./pagination";
import type { User } from "./user";

export interface Connection {
  id: string;
  following: User;
  follower: User;
  status: number;
  createdAt: string;
  updatedAt: string;
}

export interface ConnectionsWithPagination {
  connections: Connection[];
  pagination: Pagination;
}
