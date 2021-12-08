import { createContext, ReactNode, useContext, useState } from "react";
import type { Notification } from "@t/notification";

const NotificationsContext = createContext<NotificationsContext>([]);
const NotificationsContextSetState = createContext<SetNotificationsContext>({
  setNotifications: () => {},
});

type Props = {
  children: ReactNode;
};

export function NotificationsProvider({ children }: Props) {
  const [notifications, setNotifications] = useState<NotificationsContext>([]);

  return (
    <NotificationsContext.Provider value={notifications}>
      <NotificationsContextSetState.Provider
        value={{
          setNotifications,
        }}
      >
        {children}
      </NotificationsContextSetState.Provider>
    </NotificationsContext.Provider>
  );
}

function useNotificationsState() {
  const notifications = useContext(NotificationsContext);

  return notifications;
}

function useNotificationsSetState() {
  const { setNotifications } = useContext(NotificationsContextSetState);

  return { setNotifications };
}

export function useNotificationsContext() {
  const notifications = useNotificationsState();
  const { setNotifications } = useNotificationsSetState();

  const pushNotifications = (notification: Notification) => {
    setNotifications(prevNotifications => [notification, ...prevNotifications]);
  };

  return { notifications, setNotifications, pushNotifications };
}
