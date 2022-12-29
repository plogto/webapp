import type { Placeholder } from "@t/placeholder";
import type { TicketMessagesWithPageInfo } from "@t/ticket";

export interface TicketMessagesListProps {
  data?: TicketMessagesWithPageInfo;
  scrollableTarget?: string;
  isLoading?: boolean;
  getMoreData: () => void;
  placeholder: Placeholder;
}
