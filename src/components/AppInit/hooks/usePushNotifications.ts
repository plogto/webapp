import { useEffect } from "react";
import { useSubscription } from "@apollo/client";
import { useNotificationsContext } from "@contexts/NotificationsContext";
import type { GetNotificationSubscription } from "@graphql/@types/notification";
import { GET_NOTIFICATION } from "@graphql/notification";

export function usePushNotification() {
  const { pushNotification } = useNotificationsContext();

  const { data: newNotification } =
    useSubscription<GetNotificationSubscription>(GET_NOTIFICATION);

  useEffect(() => {
    if (newNotification?.getNotification) {
      pushNotification(newNotification?.getNotification);
    }
  }, [newNotification?.getNotification, pushNotification]);
}
