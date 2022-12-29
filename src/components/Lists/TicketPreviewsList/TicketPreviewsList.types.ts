import type { Placeholder } from "@t/placeholder";
import type { TicketsWithPageInfo } from "@t/ticket";

export interface TicketPreviewsListProps {
  data?: TicketsWithPageInfo;
  scrollableTarget?: string;
  isLoading?: boolean;
  getMoreData: () => void;
  placeholder: Placeholder;
}
