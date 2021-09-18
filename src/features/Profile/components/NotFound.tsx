import { PageStatus } from "@/components/PageStatus";
import { XIcon } from "@heroicons/react/outline";
import styles from "../Profile.module.css";

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
