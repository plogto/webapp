import { useMemo } from "react";
import classNames from "classnames";
import Link from "next/link";
import { CREDIT_TRANSACTION_PARSER } from "@constants";
import { DateType } from "@enums";
import { Avatar } from "@components/Avatar";
import { CreditTransactionStatus } from "@components/CreditTransactionStatus";
import { FullName } from "@components/FullName";
import { useDate } from "@hooks/useDate";
import { useNavigator } from "@hooks/useNavigator";
import styles from "./CreditTransaction.module.css";
import type { CreditTransactionProps } from "./CreditTransaction.types";
import { useCreditTransaction } from "./useCreditTransaction";

export function CreditTransaction(props: CreditTransactionProps) {
  const {
    creditTransaction: {
      amount,
      recipient,
      info: { description, descriptionVariables, status, template, createdAt },
    },
  } = props;

  const { formatProfilePageRoute } = useNavigator();
  const { preparedAmount, parseCreditTransaction } = useCreditTransaction({
    amount,
  });
  const { formatFromNow } = useDate();

  const preparedTemplate = useMemo(
    () => template?.content.split(CREDIT_TRANSACTION_PARSER.KEY_PATTERN),
    [template],
  );

  const amountClasses = classNames(
    styles.amount,
    styles[preparedAmount.type.toLowerCase()],
  );

  return (
    <div className={styles.creditTransaction}>
      <Link href={formatProfilePageRoute(recipient.username)}>
        <a className="cursor-pointer">
          <Avatar
            className={styles.avatar}
            avatar={recipient.avatar}
            alt={recipient.fullName}
          />
        </a>
      </Link>
      <div className={styles.content}>
        <div className="inline-flex space-x-1">
          <Link href={formatProfilePageRoute(recipient.username)}>
            <a className="cursor-pointer">
              <FullName fullName={recipient?.fullName} size="small" />
            </a>
          </Link>
          <CreditTransactionStatus status={status} />
        </div>
        <div className={styles.description}>
          {description}
          {preparedTemplate?.map(element =>
            parseCreditTransaction(element, descriptionVariables),
          )}
        </div>
        <div className={styles.date}>
          {formatFromNow({ date: createdAt, type: DateType.SHORT })}
        </div>
      </div>
      <div className={styles.amountWrapper}>
        <span className={amountClasses}>{preparedAmount.value}</span>
      </div>
    </div>
  );
}
