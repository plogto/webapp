import classNames from "classnames";
import { PageLoaderHeightType } from "@enums";
import { PageLoader } from "@components/PageLoader";
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
      {loading && <PageLoader heightType={PageLoaderHeightType.NORMAL} />}
      {children}
    </div>
  );
}
