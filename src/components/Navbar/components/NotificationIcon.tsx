import { Icon } from "@components/Icon";
import styles from "../Navbar.module.css";
import { useNavbar } from "../useNavbar";

export function NotificationIcon() {
  const { unreadNotificationsCount } = useNavbar();

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
