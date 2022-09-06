import { Placeholder } from "@components/Placeholder";
import styles from "./NotFound.module.css";

export function NotFound() {
  return (
    <div className={styles.notFound}>
      <Placeholder title="User Not Found" icon="User" />
    </div>
  );
}
