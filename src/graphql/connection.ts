import { gql } from "@apollo/client";

export const FOLLOW_USER = gql`
  mutation followUser($userId: ID!) {
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
  mutation unfollowUser($userId: ID!) {
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
  mutation acceptUser($userId: ID!) {
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
  mutation rejectUser($userId: ID!) {
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
  query getFollowRequests {
    getFollowRequests {
      connections {
        id
        status
        follower {
          id
          username
          fullName
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

export const GET_FOLLOWING_BY_USERNAME = gql`
  query getFollowingByUsername($username: String!) {
    getFollowingByUsername(username: $username) {
      connections {
        id
        status
        following {
          id
          username
          fullName
          avatar {
            id
            name
          }
          connectionStatus
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

export const GET_FOLLOWERS_BY_USERNAME = gql`
  query getFollowersByUsername($username: String!) {
    getFollowersByUsername(username: $username) {
      connections {
        id
        status
        follower {
          id
          username
          fullName
          avatar {
            id
            name
          }
          connectionStatus
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
