import { createContext, ReactNode, useContext, useState } from "react";
import type { Notification } from "@t/notification";

const NotificationsContext = createContext<NotificationsContext>({});
const NotificationsContextSetState = createContext<SetNotificationsContext>({
  setNotifications: () => {},
  setUnreadNotificationsCount: () => {},
  setPagination: () => {},
});

interface Props {
  children: ReactNode;
}

export function NotificationsProvider({ children }: Props) {
  const [notifications, setNotifications] = useState<
    NotificationsContext["notifications"]
  >([]);
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

function useNotificationsState() {
  const { notifications, unreadNotificationsCount, pagination } =
    useContext(NotificationsContext);

  return { notifications, unreadNotificationsCount, pagination };
}

function useNotificationsSetState() {
  const { setNotifications, setUnreadNotificationsCount, setPagination } =
    useContext(NotificationsContextSetState);

  return { setNotifications, setUnreadNotificationsCount, setPagination };
}

export function useNotificationsContext() {
  const { notifications, unreadNotificationsCount, pagination } =
    useNotificationsState();
  const { setNotifications, setUnreadNotificationsCount, setPagination } =
    useNotificationsSetState();

  const pushNotifications = (notification: Notification) => {
    setNotifications(prevNotifications =>
      prevNotifications ? [notification, ...prevNotifications] : [notification],
    );
    setUnreadNotificationsCount(prevCount => (prevCount ? prevCount + 1 : 1));
  };

  return {
    notifications,
    unreadNotificationsCount,
    pagination,
    setNotifications,
    setUnreadNotificationsCount,
    setPagination,
    pushNotifications,
  };
}
