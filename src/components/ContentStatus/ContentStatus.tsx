import classNames from "classnames";
import { Icon } from "@components/Icon";
import styles from "./ContentStatus.module.css";
import type { ContentStatusProps } from "./ContentStatus.types";

export function ContentStatus(props: ContentStatusProps) {
  const { title, icon, description, className } = props;
  const wrapperClasses = classNames(styles.wrapper, className);

  return (
    <div className={wrapperClasses}>
      <div className={styles.iconWrapper}>
        {<Icon name={icon} className={styles.icon} />}
      </div>
      <div className={styles.title}>{title}</div>
      {description && <div className={styles.description}>{description}</div>}
    </div>
  );
}
