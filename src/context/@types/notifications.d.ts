import { Dispatch, SetStateAction } from "react";
import type { Notification } from "@t/notification";

declare global {
  export type NotificationsContext = Notification[];

  export type SetNotificationsContext = {
    setNotifications: Dispatch<SetStateAction<NotificationsContext>>;
  };
}
