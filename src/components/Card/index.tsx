import { CardProps } from "./@types";
import styles from "./Card.module.css";

export function Card(props: CardProps) {
  const { children, className } = props;
  return <div className={`${className} ${styles.card}`}>{children}</div>;
}
