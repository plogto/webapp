import type { CreditTransactionsWithPageInfo } from "@t/creditTransaction";
import type { PageInfoRequest } from "@t/pageInfo";

export interface GetCreditTransactionsQuery {
  getCreditTransactions: CreditTransactionsWithPageInfo;
}
export type GetCreditTransactionsQueryRequest = PageInfoRequest;
