import styles from "../../SidebarNavigation.module.css";
import { Icon } from "@components/Icon";
import { useNotificationsContext } from "@context/NotificationsContext";

export function NotificationIcon() {
  const { unreadNotificationsCount } = useNotificationsContext();

  return (
    <div className="relative">
      {unreadNotificationsCount && (
        <span className={styles.notificationBadge} />
      )}
      <Icon name="bell" type="fill" />
    </div>
  );
}
