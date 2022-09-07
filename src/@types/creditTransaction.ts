import {
  CreditTransactionDescriptionVariableType,
  CreditTransactionStatusType,
  CreditTransactionType,
  CreditTransactionTypeName,
} from "@enums";
import type { WithPageInfo } from "@t";
import type { User } from "./user";

export interface CreditTransactionDescriptionVariable {
  id: string;
  type: CreditTransactionDescriptionVariableType;
  key: string;
  content: string;
  url?: string;
  image?: string;
}

interface CreditTransactionTemplate {
  id: string;
  name: CreditTransactionTypeName;
  content: string;
}

interface CreditTransactionInfo {
  id: string;
  status: CreditTransactionStatusType;
  template?: CreditTransactionTemplate;
  description?: string;
  descriptionVariables: CreditTransactionDescriptionVariable[];
  createdAt: string;
}

export interface CreditTransaction {
  id: string;
  type: CreditTransactionType;
  user: User;
  recipient: User;
  amount: number;
  info: CreditTransactionInfo;
}

export type CreditTransactionsWithPageInfo = WithPageInfo<CreditTransaction>;
