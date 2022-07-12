import { useEffect } from "react";
import { createContext, ReactNode, useContext, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import type {
  GetNotificationsQuery,
  GetNotificationsQueryRequest,
} from "@graphql/@types/notification";
import { GET_NOTIFICATIONS } from "@graphql/notification";
import type { Notification } from "@t/notification";
import { useAccountContext } from "./AccountContext";

const initialNotifications = {
  notifications: [],
};

const NotificationsContext =
  createContext<NotificationsContext>(initialNotifications);

const NotificationsContextSetState = createContext<SetNotificationsContext>({
  setNotifications: () => {},
  setUnreadNotificationsCount: () => {},
  setPagination: () => {},
});

interface Props {
  children: ReactNode;
}
// TODO: refactor this context
export function NotificationsProvider({ children }: Props) {
  const [notifications, setNotifications] = useState<
    NotificationsContext["notifications"]
  >(initialNotifications.notifications);
  const [unreadNotificationsCount, setUnreadNotificationsCount] =
    useState<NotificationsContext["unreadNotificationsCount"]>();
  const [pagination, setPagination] =
    useState<NotificationsContext["pagination"]>();

  return (
    <NotificationsContext.Provider
      value={{ notifications, unreadNotificationsCount, pagination }}
    >
      <NotificationsContextSetState.Provider
        value={{
          setNotifications,
          setUnreadNotificationsCount,
          setPagination,
        }}
      >
        {children}
      </NotificationsContextSetState.Provider>
    </NotificationsContext.Provider>
  );
}

export function useNotificationsContext() {
  const { notifications, unreadNotificationsCount, pagination } =
    useContext(NotificationsContext);
  const { setNotifications, setUnreadNotificationsCount, setPagination } =
    useContext(NotificationsContextSetState);
  const { user } = useAccountContext();

  const [getNotifications, { data, fetchMore }] = useLazyQuery<
    GetNotificationsQuery,
    GetNotificationsQueryRequest
  >(GET_NOTIFICATIONS);

  useEffect(() => {
    if (user) {
      getNotifications().then(({ data }) => {
        setNotifications(data?.getNotifications?.notifications || []);
        setPagination(data?.getNotifications.pagination);
      });
    }
  }, []);

  useEffect(() => {
    if (data?.getNotifications?.unreadNotificationsCount) {
      setUnreadNotificationsCount(
        data.getNotifications.unreadNotificationsCount,
      );
    }
  }, [data?.getNotifications?.unreadNotificationsCount]);

  const getMoreData = () =>
    fetchMore({
      variables: {
        page: pagination?.nextPage,
      },
    }).then(({ data }) => {
      const newNotifications = data?.getNotifications?.notifications || [];
      setNotifications(prevNotifications =>
        prevNotifications.length
          ? prevNotifications.concat(newNotifications)
          : newNotifications,
      );
      setPagination(data?.getNotifications.pagination);
    });

  const pushNotification = (notification: Notification) => {
    setNotifications(prevNotifications =>
      prevNotifications ? [notification, ...prevNotifications] : [notification],
    );
    setUnreadNotificationsCount(prevCount => (prevCount ? prevCount + 1 : 1));
  };

  return {
    notifications,
    unreadNotificationsCount,
    pagination,
    getMoreData,
    pushNotification,
  };
}
