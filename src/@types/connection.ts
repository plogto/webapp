import type { Pagination } from "./pagination";
import type { Status } from "./status";
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

export interface ConnectionData {
  data?: Connection[];
  pagination?: Pagination;
  isLoading?: boolean;
}

export interface ConnectionTab {
  dataKey: "follower" | "following";
  title: string;
  href: string;
  data: ConnectionData;
  getMoreData: () => void;
  emptyStatus: Status;
}
