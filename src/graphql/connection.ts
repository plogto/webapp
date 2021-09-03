import { gql } from "@apollo/client";

export const FOLLOW_USER = gql`
  mutation followUser($userId: ID!) {
    followUser(userId: $userId) {
      id
      status
      following {
        id
      }
      follower {
        id
      }
    }
  }
`;

export const UNFOLLOW_USER = gql`
  mutation unfollowUser($userId: ID!) {
    unfollowUser(userId: $userId) {
      id
      status
      following {
        id
      }
      follower {
        id
      }
    }
  }
`;

export const ACCEPT_USER = gql`
  mutation acceptUser($userId: ID!) {
    acceptUser(userId: $userId) {
      id
      status
      following {
        id
      }
      follower {
        id
      }
    }
  }
`;

export const REJECT_USER = gql`
  mutation rejectUser($userId: ID!) {
    rejectUser(userId: $userId) {
      id
      status
      following {
        id
      }
      follower {
        id
      }
    }
  }
`;

export const GET_USER_FOLLOW_REQUESTS = gql`
  query getUserFollowRequests {
    getUserFollowRequests {
      connections {
        id
        status
        follower {
          id
          username
          fullname
        }
      }
      pagination {
        totalDocs
        totalPages
        page
        limit
      }
    }
  }
`;
