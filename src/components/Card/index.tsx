import { CardProps } from "./@types";
import styles from "./Card.module.css";
import { Loading } from "@components/Loading";

export function Card(props: CardProps) {
  const { loading, children, className } = props;
  return (
    <div className={`${className} ${styles.card}`}>
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
