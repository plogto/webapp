import type { ConnectionsWithPageInfo } from "@t/connection";
import type { Status } from "@t/status";

// TODO: improve data and dataKey types
export interface UsersProps {
  dataKey: "following" | "follower";
  data?: ConnectionsWithPageInfo;
  scrollableTarget: string;
  className?: string;
  isLoading?: boolean;
  getMoreData: () => void;
  emptyStatus: Status;
}
