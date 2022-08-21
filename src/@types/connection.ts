import type { WithPageInfo } from ".";
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

export type ConnectionsWithPageInfo = WithPageInfo<Connection>;

export interface ConnectionData {
  data?: ConnectionsWithPageInfo;
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
