import type { CounterProps } from "@features/AddPost/@types";
import styles from "../../AddPost.module.css";

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
