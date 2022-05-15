import classNames from "classnames";
import { Loading } from "@components/Loading";
import type { CardProps } from "./@types";
import styles from "./Card.module.css";

export function Card(props: CardProps) {
  const { shadow = true, loading, children, className } = props;
  const wrapperClasses = classNames(
    className,
    styles.card,
    shadow && styles.isShadow,
  );

  return (
    <div className={wrapperClasses}>
      {loading && (
        <div className={styles.loadingContainer}>
          <span className="relative">
            <Loading className={styles.loading} />
          </span>
        </div>
      )}
      {children}
    </div>
  );
}
