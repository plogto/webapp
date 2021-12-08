import type { Comment } from "./comment";
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
  comment?: Comment;
  url: string;
  read?: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UserNotificationsWithPagination = {
  notifications: Notification[];
  pagination: Pagination;
};
