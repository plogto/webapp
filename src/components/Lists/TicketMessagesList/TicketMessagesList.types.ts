import type { Placeholder } from "@t/placeholder";
import type { TicketMessagesWithPageInfo } from "@t/ticket";

export interface TicketMessagesListProps {
  ticketMessages?: TicketMessagesWithPageInfo;
  scrollableTarget?: string;
  className?: string;
  isLoading?: boolean;
  getMoreData: () => void;
  emptyStatus: Placeholder;
}
