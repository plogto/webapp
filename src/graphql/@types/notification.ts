import type { Edge } from "@t";
import type { Notification, NotificationsWithPageInfo } from "@t/notification";
import type { PageInfoRequest } from "@t/pageInfo";

export interface GetNotificationsQuery {
  getNotifications: NotificationsWithPageInfo;
}

export type GetNotificationsQueryRequest = PageInfoRequest;

export interface GetNotificationSubscription {
  getNotification: Edge<Notification>;
}

export interface ReadNotificationsMutation {
  readNotifications: boolean;
}
