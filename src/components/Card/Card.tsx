import classNames from "classnames";
import { PageLoader } from "@components/PageLoader";
import styles from "./Card.module.css";
import type { CardProps } from "./Card.types";

export function Card(props: CardProps) {
  const {
    shadow = false,
    rounded = false,
    isLoading,
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
      {isLoading ? <PageLoader /> : children}
    </div>
  );
}
