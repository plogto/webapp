import { PageUrls } from "@/@enums/pages";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useNotifications } from "./hooks/useNotifications";
import styles from "./Notifications.module.css";

export default function Notifications() {
  const { followRequestsCount } = useNotifications();
  const { t } = useTranslation("notifications");
  return (
    <Wrapper>
      {!!followRequestsCount && followRequestsCount > 0 && (
        <Link href={PageUrls.FOLLOW_REQUESTS}>
          <div className={styles.requestsCard}>
            <span className={styles.badgeWrapper}>
              <span className={`${styles.badgePinger} animate-ping`}></span>
              <span className={styles.badge}></span>
            </span>
            <div className="ml-3 capitalize">{t("texts.followRequests")}</div>
          </div>
        </Link>
      )}
    </Wrapper>
  );
}
