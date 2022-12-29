import type { NotificationsWithPageInfo } from "@t/notification";
import type { Placeholder } from "@t/placeholder";

export interface NotificationsListProps {
  data?: NotificationsWithPageInfo;
  className?: string;
  isLoading?: boolean;
  getMoreData: () => void;
  placeholder: Placeholder;
}
