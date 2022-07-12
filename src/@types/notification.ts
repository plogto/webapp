import type { Pagination } from "./pagination";
import type { Post } from "./post";
import type { User } from "./user";

export interface NotificationType {
  id: string;
  name: string;
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

export interface NotificationsWithPagination {
  notifications: Notification[];
  unreadNotificationsCount?: number;
  pagination?: Pagination;
}
