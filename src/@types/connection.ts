import type { WithPageInfo } from ".";
import { UsersListDataKey } from "@enums";
import { IconNames } from "@components/Icon";
import type { Placeholder } from "./placeholder";
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
  dataKey: UsersListDataKey;
  title: string;
  icon?: IconNames;
  href: string;
  data: ConnectionData;
  getMoreData: () => void;
  emptyStatus: Placeholder;
}
