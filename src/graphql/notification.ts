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
        comment {
          id
          content
        }
        read
        createdAt
      }
      pagination {
        totalDocs
      }
    }
  }
`;
