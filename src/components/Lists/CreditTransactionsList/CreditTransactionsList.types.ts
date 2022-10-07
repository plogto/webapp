import type { CreditTransactionsWithPageInfo } from "@t/creditTransaction";
import type { Placeholder } from "@t/placeholder";

export interface CreditTransactionsListProps {
  data?: CreditTransactionsWithPageInfo;
  scrollableTarget?: string;
  isLoading?: boolean;
  getMoreData: () => void;
  emptyStatus: Placeholder;
}
