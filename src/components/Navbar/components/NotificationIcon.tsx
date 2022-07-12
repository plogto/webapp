import { Icon } from "@components/Icon";
import { useNotificationsContext } from "@contexts/NotificationsContext";
import styles from "../Navbar.module.css";

export function NotificationIcon() {
  const { unreadNotificationsCount } = useNotificationsContext();

  return (
    <div className="relative">
      <span className={styles.notificationBadgeWrapper}>
        {!!unreadNotificationsCount && (
          <span className={styles.notificationBadge}>
            {unreadNotificationsCount < 100 ? unreadNotificationsCount : "+99"}
          </span>
        )}
      </span>
      <Icon name="BellFill" />
    </div>
  );
}
