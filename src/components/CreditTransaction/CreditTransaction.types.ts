import { CreditTransactionAmountType } from "@enums";
import type { CreditTransaction } from "@t/creditTransaction";

export interface CreditTransactionProps {
  creditTransaction: CreditTransaction;
}

export interface UseCreditTransactionProps {
  amount: CreditTransaction["amount"];
}

export interface Amount {
  value: string;
  type: CreditTransactionAmountType;
}
