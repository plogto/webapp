import { XIcon } from "@heroicons/react/outline";
import styles from "../Profile.module.css";
import { PageStatus } from "@components/PageStatus";

export function NotFound() {
  return (
    <div className={styles.notFound}>
      <PageStatus
        title="User Not Found"
        icon={<XIcon strokeWidth="1" className="w-12" />}
      />
    </div>
  );
}
