import { gql } from "@apollo/client";
import { PageInfoFragment } from "./fragments/pageInfo";
import { UserFragment } from "./fragments/user";

export const FOLLOW_USER = gql`
  mutation followUser($userId: UUID!) {
    followUser(userId: $userId) {
      id
      status
      following {
        id
        connectionStatus
        followersCount
        followingCount
      }
      follower {
        id
        followersCount
        followingCount
      }
    }
  }
`;

export const UNFOLLOW_USER = gql`
  mutation unfollowUser($userId: UUID!) {
    unfollowUser(userId: $userId) {
      id
      status
      following {
        id
        connectionStatus
        followersCount
        followingCount
      }
      follower {
        id
        followersCount
        followingCount
      }
    }
  }
`;

export const ACCEPT_USER = gql`
  mutation acceptUser($userId: UUID!) {
    acceptUser(userId: $userId) {
      id
      status
      following {
        id
        connectionStatus
      }
      follower {
        id
      }
    }
  }
`;

export const REJECT_USER = gql`
  mutation rejectUser($userId: UUID!) {
    rejectUser(userId: $userId) {
      id
      status
      following {
        id
        connectionStatus
      }
      follower {
        id
      }
    }
  }
`;

export const GET_FOLLOW_REQUESTS = gql`
  ${PageInfoFragment.complete}
  query getFollowRequests {
    getFollowRequests {
      totalCount
      edges {
        node {
          id
          status
          follower {
            id
            username
            fullName
          }
        }
      }
      pageInfo {
        ...PageInfoFragmentComplete
      }
    }
  }
`;

export const GET_FOLLOWING_BY_USERNAME = gql`
  ${UserFragment.default}
  ${PageInfoFragment.complete}
  query getFollowingByUsername($username: String!) {
    getFollowingByUsername(username: $username) {
      totalCount
      edges {
        node {
          id
          status
          following {
            ...UserFragment
          }
        }
      }
      pageInfo {
        ...PageInfoFragmentComplete
      }
    }
  }
`;

export const GET_FOLLOWERS_BY_USERNAME = gql`
  ${UserFragment.default}
  ${PageInfoFragment.complete}
  query getFollowersByUsername($username: String!) {
    getFollowersByUsername(username: $username) {
      totalCount
      edges {
        node {
          id
          status
          follower {
            ...UserFragment
          }
        }
      }
      pageInfo {
        ...PageInfoFragmentComplete
      }
    }
  }
`;
