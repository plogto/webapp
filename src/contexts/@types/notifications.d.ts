import type { Dispatch, SetStateAction } from "react";
import type { NotificationsWithPageInfo } from "@t/notification";

declare global {
  export type NotificationsContext = NotificationsWithPageInfo;

  export interface SetNotificationsContext {
    setEdges: Dispatch<SetStateAction<NotificationsContext["edges"]>>;
    setUnreadNotificationsCount: Dispatch<
      SetStateAction<NotificationsContext["unreadNotificationsCount"]>
    >;
    setPageInfo: Dispatch<SetStateAction<NotificationsContext["pageInfo"]>>;
    setTotalCount: Dispatch<SetStateAction<NotificationsContext["totalCount"]>>;
  }
}
