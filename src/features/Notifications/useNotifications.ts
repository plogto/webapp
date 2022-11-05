import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import { useNotificationsContext } from "@contexts/NotificationsContext";
import type { ReadNotificationsMutation } from "@graphql/@types/notification";
import { GET_NOTIFICATIONS, READ_NOTIFICATIONS } from "@graphql/notification";

export function useNotifications() {
  const [readNotifications] =
    useMutation<ReadNotificationsMutation>(READ_NOTIFICATIONS);
  const { setUnreadNotificationsCount } = useNotificationsContext();

  useEffect(() => {
    readNotifications({
      refetchQueries: [
        {
          query: GET_NOTIFICATIONS,
        },
      ],
    }).then(({ data }) => {
      if (data?.readNotifications) {
        setUnreadNotificationsCount(0);
      }
    });
  }, [readNotifications, setUnreadNotificationsCount]);
}
