import type { Notification } from "@t/notification";
import type { Pagination } from "@t/pagination";
import type { Status } from "@t/status";

export interface NotificationsListProps {
  notifications?: Notification[];
  scrollableTarget: string;
  className?: string;
  isLoading?: boolean;
  pagination?: Pagination;
  getMoreData: () => void;
  emptyStatus: Status;
}
