import type { CreditTransactionsWithPageInfo } from "@t/creditTransaction";
import type { Placeholder } from "@t/placeholder";
import type { User } from "@t/user";

export interface CreditsContentProps {
  user?: User;
  isLoading?: boolean;
  creditTransactions?: CreditTransactionsWithPageInfo;
  getMoreData: () => void;
  emptyStatus: Placeholder;
}

export interface InvitationCodeProps {
  invitationCode?: User["invitationCode"];
}

export interface UseInviteFriendsProps {
  user?: User;
}
