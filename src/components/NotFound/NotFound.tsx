import { ContentStatus } from "@components/ContentStatus";
import styles from "./NotFound.module.css";

export function NotFound() {
  return (
    <div className={styles.notFound}>
      <ContentStatus title="User Not Found" icon="User" />
    </div>
  );
}
