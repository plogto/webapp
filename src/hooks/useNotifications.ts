import { useEffect } from "react";
import { useSubscription } from "@apollo/client";
import { useNotificationsContext } from "@contexts/NotificationsContext";
import type { GetNotificationSubscription } from "@graphql/@types/notification";
import { GET_NOTIFICATION } from "@graphql/notification";

export function useNotifications() {
  const { data, loading } =
    useSubscription<GetNotificationSubscription>(GET_NOTIFICATION);

  const { pushNotifications } = useNotificationsContext();

  useEffect(() => {
    if (data?.getNotification) {
      pushNotifications(data.getNotification);
    }
  }, [data, loading, pushNotifications]);
}
