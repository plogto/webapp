import classNames from "classnames";
import { LinkButton } from "@components/Buttons/LinkButton";
import { Icon } from "@components/Icon";
import styles from "./Placeholder.module.css";
import type { PlaceholderProps } from "./Placeholder.types";

export function Placeholder(props: PlaceholderProps) {
  const { title, icon, description, className, backButton } = props;

  const wrapperClasses = classNames(styles.wrapper, className);

  return (
    <div className={wrapperClasses}>
      <div className={styles.iconWrapper}>
        {<Icon name={icon} className={styles.icon} />}
      </div>
      <div className={styles.title}>{title}</div>
      {description && <div className={styles.description}>{description}</div>}
      {backButton && (
        <LinkButton href={backButton.href} className={styles.backButton}>
          {backButton?.title}
        </LinkButton>
      )}
    </div>
  );
}
