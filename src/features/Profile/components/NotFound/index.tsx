import { Icon } from "@components/Icon";
import { PageStatus } from "@components/PageStatus";
import styles from "../../Profile.module.css";

export function NotFound() {
  return (
    <div className={styles.notFound}>
      <PageStatus
        title="User Not Found"
        icon={<Icon name="X" className="w-12" />}
      />
    </div>
  );
}
