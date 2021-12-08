import { useLazyQuery } from "@apollo/client";
import { useEffect, useMemo } from "react";
import { useAccountContext } from "@context/AccountContext";
import { useNotificationsContext } from "@context/NotificationsContext";
import { GetNotificationsQuery } from "@graphql/@types/notification";
import { GET_NOTIFICATIONS } from "@graphql/notification";

export function useNotifications() {
  const { user } = useAccountContext();
  const [getNotifications, getNotificationsResponse] =
    useLazyQuery<GetNotificationsQuery>(GET_NOTIFICATIONS);

  const {
    notifications,
    unreadNotificationsCount,
    setNotifications,
    setUnreadNotificationsCount,
  } = useNotificationsContext();

  useEffect(() => {
    getNotifications();
  }, []);

  useEffect(() => {
    if (getNotificationsResponse.data?.getNotifications) {
      setNotifications(
        getNotificationsResponse.data?.getNotifications.notifications,
      );
      setUnreadNotificationsCount(
        getNotificationsResponse.data?.getNotifications
          .unreadNotificationsCount,
      );
    }
  }, [getNotificationsResponse.data]);

  const followRequestsCount = useMemo(
    () => user?.followRequestsCount,
    [user?.followRequestsCount],
  );

  return { followRequestsCount, notifications, unreadNotificationsCount };
}
