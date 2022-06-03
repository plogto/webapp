import { useEffect, useMemo } from "react";
import { useLazyQuery } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import { useNotificationsContext } from "@contexts/NotificationsContext";
import {
  GetNotificationsQuery,
  GetNotificationsQueryRequest,
} from "@graphql/@types/notification";
import { GET_NOTIFICATIONS } from "@graphql/notification";

export function useNotifications() {
  const { user } = useAccountContext();
  const [getNotifications, getNotificationsResponse] = useLazyQuery<
    GetNotificationsQuery,
    GetNotificationsQueryRequest
  >(GET_NOTIFICATIONS);

  const {
    notifications,
    unreadNotificationsCount,
    setNotifications,
    setUnreadNotificationsCount,
  } = useNotificationsContext();

  useEffect(() => {
    getNotifications({
      variables: {
        limit: 15,
      },
    });
  }, [getNotifications]);

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
  }, [
    getNotificationsResponse.data,
    setNotifications,
    setUnreadNotificationsCount,
  ]);

  const followRequestsCount = useMemo(
    () => user?.followRequestsCount,
    [user?.followRequestsCount],
  );

  return { followRequestsCount, notifications, unreadNotificationsCount };
}
