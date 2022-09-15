import { gql } from "@apollo/client";
import { PageInfoFragment } from "./fragments/pageInfo";
import { UserFragment } from "./fragments/user";

export const GET_NOTIFICATIONS = gql`
  ${UserFragment.short}
  ${PageInfoFragment.complete}
  query getNotifications($first: Int, $after: String) {
    getNotifications(pageInfoInput: { first: $first, after: $after }) {
      totalCount
      edges {
        node {
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
      unreadNotificationsCount
      pageInfo {
        ...PageInfoFragmentComplete
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

export const READ_NOTIFICATIONS = gql`
  mutation readNotifications {
    readNotifications
  }
`;
