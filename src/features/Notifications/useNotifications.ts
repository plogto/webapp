import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useNotificationsContext } from "@contexts/NotificationsContext";
import type { ReadNotificationsMutation } from "@graphql/@types/notification";
import { READ_NOTIFICATIONS } from "@graphql/notification";

export function useNotifications() {
  const [readNotifications] =
    useMutation<ReadNotificationsMutation>(READ_NOTIFICATIONS);
  const { setUnreadNotificationsCount } = useNotificationsContext();

  useEffect(() => {
    readNotifications().then(({ data }) => {
      if (data?.readNotifications) {
        setUnreadNotificationsCount(0);
      }
    });
  }, [readNotifications]);
}
