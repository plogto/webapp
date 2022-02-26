import classNames from "classnames";
import styles from "./PageStatus.module.css";
import type { PageStatusProps } from "./@types";

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
