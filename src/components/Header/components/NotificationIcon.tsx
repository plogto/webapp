import { Icon } from "@components/Icon";
import { useNotificationsContext } from "@contexts/NotificationsContext";
import styles from "../../Header.module.css";

export function NotificationIcon() {
  const { unreadNotificationsCount } = useNotificationsContext();

  return (
    <div className="relative">
      {!!unreadNotificationsCount && (
        <span className={styles.notificationBadge} />
      )}
      <Icon name="BellFill" />
    </div>
  );
}
