import type { CreditTransactionsWithPageInfo } from "@t/creditTransaction";
import type { Placeholder } from "@t/placeholder";
import type { User } from "@t/user";

export interface CreditsContentProps {
  user?: User;
  creditTransactions?: CreditTransactionsWithPageInfo;
  getMoreData: () => void;
  emptyStatus: Placeholder;
}
