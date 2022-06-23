import classNames from "classnames";
import { Loader } from "@components/Loader";
import styles from "./Card.module.css";
import type { CardProps } from "./Card.types";

export function Card(props: CardProps) {
  const {
    shadow = false,
    rounded = false,
    loading,
    children,
    className,
  } = props;
  const wrapperClasses = classNames(
    className,
    styles.card,
    shadow && styles.isShadow,
    rounded && styles.isRounded,
  );

  return (
    <div className={wrapperClasses}>
      {loading && (
        <div className={styles.loadingContainer}>
          <span className="relative">
            <Loader className={styles.loading} />
          </span>
        </div>
      )}
      {children}
    </div>
  );
}
