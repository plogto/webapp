import { gql } from "@apollo/client";

export const GET_USER_INFO = gql`
  query getUserInfo {
    getUserInfo {
      id
      username
      email
      fullname
      followersCount
      followingCount
      followRequestsCount
      postsCount
      createdAt
      updatedAt
    }
  }
`;

export const GET_USER_BY_USERNAME = gql`
  query getUserByUsername($username: String!) {
    getUserByUsername(username: $username) {
      id
      username
      email
      fullname
      isPrivate
      connectionStatus
      followersCount
      followingCount
      postsCount
      createdAt
      updatedAt
    }
  }
`;
