import { useMemo, useCallback } from "react";
import { v4 as uuid } from "uuid";
import Link from "next/link";
import { CREDIT_TRANSACTION_DESCRIPTION_VARIABLE_KEYS } from "@constants";
import { CreditTransactionAmountType } from "@enums";
import { FullName } from "@components/FullName";
import { useCredit } from "@hooks/useCredit";
import { useNavigator } from "@hooks/useNavigator";
import type { CreditTransactionDescriptionVariable } from "@t/creditTransaction";
import { prepareKeyPattern } from "@utils/pattern";
import styles from "./CreditTransaction.module.css";
import type {
  Amount,
  UseCreditTransactionProps,
} from "./CreditTransaction.types";

export function useCreditTransaction(props: UseCreditTransactionProps) {
  const { amount } = props;
  const { formatProfilePageRoute, formatTicketPageRoute } = useNavigator();
  const { formatCreditAmount } = useCredit();

  const preparedAmount: Amount = useMemo(() => {
    const value = amount;
    const type =
      amount > 0
        ? CreditTransactionAmountType.DEPOSIT
        : CreditTransactionAmountType.WITHDRAW;

    return { value: formatCreditAmount(value, { sign: true }), type };
  }, [amount, formatCreditAmount]);

  const parseCreditTransaction = useCallback(
    (
      element: string,
      descriptionVariables: CreditTransactionDescriptionVariable[],
    ) => {
      const { INVITED_USER, INVITER_USER, TICKET } =
        CREDIT_TRANSACTION_DESCRIPTION_VARIABLE_KEYS;

      switch (element) {
        case INVITED_USER:
        case INVITER_USER:
          const user = descriptionVariables.find(
            item => prepareKeyPattern(item.key) === element,
          );
          return (
            user &&
            user.url && (
              <Link href={formatProfilePageRoute(user.url)}>
                <a className="cursor-pointer">
                  <FullName
                    key={uuid()}
                    fullName={user?.content}
                    size="small"
                  />
                </a>
              </Link>
            )
          );
        case TICKET:
          const ticket = descriptionVariables.find(
            item => prepareKeyPattern(item.key) === element,
          );
          return (
            ticket &&
            ticket.url && (
              <Link href={formatTicketPageRoute(ticket.url)}>
                <a className={styles.ticket}>#{ticket.url}</a>
              </Link>
            )
          );
        default:
          return <span key={uuid()}>{element}</span>;
      }
    },
    [formatProfilePageRoute, formatTicketPageRoute],
  );

  return { preparedAmount, parseCreditTransaction };
}
