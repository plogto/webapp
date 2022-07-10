import { useEffect } from "react";
import { useSubscription } from "@apollo/client";
import { useNotificationsContext } from "@contexts/NotificationsContext";
import type { GetNotificationSubscription } from "@graphql/@types/notification";
import { GET_NOTIFICATION } from "@graphql/notification";
import { useNotifications } from "@hooks/useNotifications";

export function useNavbar() {
  const { data, loading } =
    useSubscription<GetNotificationSubscription>(GET_NOTIFICATION);

  const { pushNotifications } = useNotificationsContext();
  const { unreadNotificationsCount } = useNotifications();

  useEffect(() => {
    console.log({ data });
    if (data?.getNotification) {
      pushNotifications(data.getNotification);
    }
  }, [data, loading]);

  return { unreadNotificationsCount };
}
