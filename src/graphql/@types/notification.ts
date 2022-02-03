import type {
  Notification,
  NotificationsWithPagination,
} from "@t/notification";

export type GetNotificationsQuery = {
  getNotifications: NotificationsWithPagination;
};

export type GetNotificationSubscription = {
  getNotification: Notification;
};
