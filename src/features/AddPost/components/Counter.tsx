import classNames from "classnames";
import styles from "../AddPost.module.css";
import type { CounterProps } from "../AddPost.types";

export function Counter({ length, maxLength }: CounterProps) {
  const isCounterOverflow = length > maxLength;

  const counterClasses = classNames(
    styles.counter,
    isCounterOverflow && styles.counterOverflow,
  );

  const numberClasses = classNames(
    styles.number,
    isCounterOverflow && styles.counterOverflow,
  );

  return (
    <span className={counterClasses}>
      <span className={numberClasses}>{length}</span>
      <span className={styles.number}>{maxLength}</span>
    </span>
  );
}
