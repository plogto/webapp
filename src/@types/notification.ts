import type { Pagination } from "./pagination";
import type { Post } from "./post";
import type { User } from "./user";

export type NotificationType = {
  id: string;
  name: string;
  template: string;
  createdAt: string;
  updatedAt: string;
};

export type Notification = {
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
};

export type NotificationsWithPagination = {
  notifications?: Notification[];
  unreadNotificationsCount?: number;
  pagination?: Pagination;
};
