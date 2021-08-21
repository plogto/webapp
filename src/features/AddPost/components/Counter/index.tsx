import styles from "./Counter.module.css";

type Props = {
  length: number;
  maxLength: number;
};

export default function Counter({ length, maxLength }: Props) {
  return (
    <span
      className={`${styles.counter} ${
        length > maxLength ? styles.counterOverflow : ""
      }`}>
      <span
        className={`${styles.number} ${
          length > maxLength ? styles.counterOverflow : ""
        }`}>
        {length}
      </span>
      <span className={styles.number}>{maxLength}</span>
    </span>
  );
}
