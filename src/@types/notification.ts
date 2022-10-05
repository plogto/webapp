import { NotificationTypeName } from "@enums";
import type { WithPageInfo } from "@t";
import type { Post } from "./post";
import type { User } from "./user";

export interface NotificationType {
  id: string;
  name: NotificationTypeName;
  template: string;
  createdAt: string;
  updatedAt: string;
}

export interface Notification {
  id: string;
  notificationType: NotificationType;
  sender: User;
  receiver: User;
  post?: Post;
  reply?: Post;
  url: string;
  read?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface NotificationsWithPageInfo extends WithPageInfo<Notification> {
  unreadNotificationsCount?: number;
}
