import classNames from "classnames";
import styles from "./CreditTransactionStatus.module.css";
import type { CreditTransactionStatusProps } from "./CreditTransactionStatus.types";

export function CreditTransactionStatus(props: CreditTransactionStatusProps) {
  const { status } = props;

  const statusClasses = classNames(
    styles.status,
    status && styles[status.toLowerCase()],
  );

  return <div className={statusClasses}>{status}</div>;
}
