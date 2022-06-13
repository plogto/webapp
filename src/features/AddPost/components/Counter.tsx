import styles from "../AddPost.module.css";
import type { CounterProps } from "../AddPost.types";

export function Counter({ length, maxLength }: CounterProps) {
  return (
    <span
      className={`${styles.counter} ${
        length > maxLength ? styles.counterOverflow : ""
      }`}
    >
      <span
        className={`${styles.number} ${
          length > maxLength ? styles.counterOverflow : ""
        }`}
      >
        {length}
      </span>
      <span className={styles.number}>{maxLength}</span>
    </span>
  );
}
