import classNames from "classnames";
import styles from "./Status.module.css";
import type { StatusProps } from "./Status.types";

export function Status(props: StatusProps) {
  const { status } = props;

  const statusClasses = classNames(
    styles.status,
    status && styles[status.toLowerCase()],
  );

  return <div className={statusClasses}>{status}</div>;
}
