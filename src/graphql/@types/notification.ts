import type {
  Notification,
  NotificationsWithPagination,
} from "@t/notification";

export interface GetNotificationsQuery {
  getNotifications: NotificationsWithPagination;
}
export interface GetNotificationsQueryRequest {
  page?: number;
  limit?: number;
}

export interface GetNotificationSubscription {
  getNotification: Notification;
}
