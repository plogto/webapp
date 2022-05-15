import classNames from "classnames";
import type { PageStatusProps } from "./@types";
import styles from "./PageStatus.module.css";

// TODO: refactor this component
export function PageStatus(props: PageStatusProps) {
  const { title, icon, description, className } = props;
  const wrapperClasses = classNames(styles.wrapper, className);

  return (
    <div className={wrapperClasses}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>{title}</div>
      {description && <div className={styles.description}>{description}</div>}
    </div>
  );
}
