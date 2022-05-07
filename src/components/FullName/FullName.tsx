import classNames from "classnames";
import { Icon } from "@components/Icon";
import styles from "./FullName.module.css";
import type { FullNameProps } from "./FullName.types";

export function FullName(props: FullNameProps) {
  const { fullName, isVerified, size = "normal", className } = props;

  const wrapperClasses = classNames(styles.wrapper, styles[size], className);

  return (
    <div className={wrapperClasses}>
      <span className={styles.fullName}>{fullName}</span>
      {isVerified && <Icon name="VerifiedFill" className={styles.verified} />}
    </div>
  );
}
