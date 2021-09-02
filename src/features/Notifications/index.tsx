import { PageUrls } from "@/@enums/pages";
import Link from "next/link";
import { useNotifications } from "./hooks/useNotifications";
import styles from "./Notifications.module.css";

export default function Notifications() {
  const { followRequestsCount } = useNotifications();

  return (
    <div className={styles.container}>
      {followRequestsCount && followRequestsCount > 0 && (
        <Link href={PageUrls.FOLLOW_REQUESTS}>
          <div className={styles.requestsCard}>
            <span className={styles.badgeContainer}>
              <span className={`${styles.badgePinger} animate-ping`}></span>
              <span className={styles.badge}></span>
            </span>
            <div className="ml-3">Follow Requests</div>
          </div>
        </Link>
      )}
    </div>
  );
}
