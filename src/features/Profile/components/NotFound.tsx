import styles from "../Profile.module.css";
import { Icon } from "@components/Icon";
import { PageStatus } from "@components/PageStatus";

// TODO: refactor this component
export function NotFound() {
  return (
    <div className={styles.notFound}>
      <PageStatus
        title="User Not Found"
        icon={<Icon name="x" className="w-12" />}
      />
    </div>
  );
}
