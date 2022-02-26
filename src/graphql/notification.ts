import { gql } from "@apollo/client";

export const GET_NOTIFICATIONS = gql`
  query getNotifications {
    getNotifications {
      notifications {
        id
        sender {
          id
          username
          fullName
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
        totalDocs
      }
    }
  }
`;

export const GET_NOTIFICATION = gql`
  subscription getNotification {
    getNotification {
      id
      sender {
        id
        username
        fullName
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
