import { useSubscription } from "@apollo/client";
import { useEffect } from "react";
import { useNotificationsContext } from "@contexts/NotificationsContext";
import { GET_NOTIFICATION } from "@graphql/notification";
import type { GetNotificationSubscription } from "@graphql/@types/notification";

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
