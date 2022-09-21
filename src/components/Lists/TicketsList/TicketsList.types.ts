import type { Placeholder } from "@t/placeholder";
import type { TicketsWithPageInfo } from "@t/ticket";

export interface TicketsListProps {
  tickets?: TicketsWithPageInfo;
  scrollableTarget?: string;
  className?: string;
  isLoading?: boolean;
  getMoreData: () => void;
  emptyStatus: Placeholder;
}
