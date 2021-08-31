import { PageUrls } from "@/@enums/pages";
import Link from "next/link";
import styles from "./Notifications.module.css";

export default function Notifications() {
  return (
    <div className={styles.container}>
      <Link href={PageUrls.FOLLOW_REQUESTS}>
        <div className={styles.requestsCard}>
          <span className={styles.badgeContainer}>
            <span className={`${styles.badgePinger} animate-ping`}></span>
            <span className={styles.badge}></span>
          </span>
          <div className="ml-3">Follow Requests</div>
        </div>
      </Link>
    </div>
  );
}
