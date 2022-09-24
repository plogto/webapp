import type { Placeholder } from "@t/placeholder";
import type { TicketsWithPageInfo } from "@t/ticket";

export interface TicketPreviewsListProps {
  tickets?: TicketsWithPageInfo;
  scrollableTarget?: string;
  className?: string;
  isLoading?: boolean;
  getMoreData: () => void;
  emptyStatus: Placeholder;
}
