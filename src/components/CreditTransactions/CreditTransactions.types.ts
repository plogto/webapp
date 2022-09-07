import type { CreditTransactionsWithPageInfo } from "@t/creditTransaction";
import type { Placeholder } from "@t/placeholder";

export interface CreditTransactionsProps {
  data?: CreditTransactionsWithPageInfo;
  scrollableTarget?: string;
  className?: string;
  isLoading?: boolean;
  getMoreData: () => void;
  emptyStatus: Placeholder;
}
