import type { NotificationsWithPageInfo } from "@t/notification";
import type { Status } from "@t/status";

export interface NotificationsListProps {
  data?: NotificationsWithPageInfo;
  className?: string;
  isLoading?: boolean;
  getMoreData: () => void;
  emptyStatus: Status;
}
