import classNames from "classnames";
import { Icon } from "@components/Icon";
import styles from "./FullName.module.css";
import type { FullNameProps } from "./FullName.types";

export function FullName(props: FullNameProps) {
  const {
    fullName,
    isVerified,
    size = "normal",
    type = "short",
    className,
  } = props;

  const wrapperClasses = classNames(styles.wrapper, styles[size], className);
  const fullNameClasses = classNames(styles.fullName, styles[type]);

  return (
    <div className={wrapperClasses}>
      <span className={fullNameClasses}>{fullName}</span>
      {isVerified && (
        <div>
          <Icon name="VerifiedFill" className={styles.verified} />
        </div>
      )}
    </div>
  );
}
