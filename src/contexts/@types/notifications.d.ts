import { Dispatch, SetStateAction } from "react";
import type { NotificationsWithPagination } from "@t/notification";

declare global {
  export type NotificationsContext = NotificationsWithPagination;

  export type SetNotificationsContext = {
    setNotifications: Dispatch<
      SetStateAction<NotificationsContext["notifications"]>
    >;
    setUnreadNotificationsCount: Dispatch<
      SetStateAction<NotificationsContext["unreadNotificationsCount"]>
    >;
    setPagination: Dispatch<SetStateAction<NotificationsContext["pagination"]>>;
  };
}
