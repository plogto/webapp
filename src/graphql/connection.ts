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
