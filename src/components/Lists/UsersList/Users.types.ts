import { UsersListDataKey } from "@enums";
import type { ConnectionsWithPageInfo } from "@t/connection";
import type { Placeholder } from "@t/placeholder";

export interface UsersListProps {
  dataKey: UsersListDataKey;
  data?: ConnectionsWithPageInfo;
  scrollableTarget?: string;
  isLoading?: boolean;
  getMoreData: () => void;
  emptyStatus: Placeholder;
}
