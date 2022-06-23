import type { Connection } from "@t/connection";
import type { Pagination } from "@t/pagination";
import type { Status } from "@t/status";

// TODO: improve data and dataKey types
export interface UsersProps {
  dataKey: "following" | "follower";
  data?: Connection[];
  scrollableTarget: string;
  className?: string;
  isLoading?: boolean;
  pagination?: Pagination;
  getMoreData: () => void;
  emptyStatus: Status;
}
