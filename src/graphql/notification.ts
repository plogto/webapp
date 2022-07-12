import { gql } from "@apollo/client";
import { PaginationFragment } from "./fragments/pagination";
import { UserFragment } from "./fragments/user";

export const GET_NOTIFICATIONS = gql`
  ${UserFragment.short}
  ${PaginationFragment.complete}
  query getNotifications($page: Int, $limit: Int) {
    getNotifications(input: { page: $page, limit: $limit }) {
      notifications {
        id
        sender {
          ...UserFragmentShort
        }
        receiver {
          id
        }
        url
        notificationType {
          name
          template
        }
        post {
          id
          content
        }
        reply {
          id
          content
        }
        read
        createdAt
      }
      unreadNotificationsCount
      pagination {
        ...PaginationFragmentComplete
      }
    }
  }
`;

export const GET_NOTIFICATION = gql`
  ${UserFragment.short}
  subscription getNotification {
    getNotification {
      id
      sender {
        ...UserFragmentShort
      }
      receiver {
        id
      }
      url
      notificationType {
        name
        template
      }
      post {
        id
        content
      }
      reply {
        id
        content
      }
      read
      createdAt
    }
  }
`;
