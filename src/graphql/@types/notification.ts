import type {
  Notification,
  NotificationsWithPagination,
} from "@t/notification";

export interface GetNotificationsQuery {
  getNotifications: NotificationsWithPagination;
}

export interface GetNotificationSubscription {
  getNotification: Notification;
}
