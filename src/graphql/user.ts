import { gql } from "@apollo/client";

export const GET_USER_INFO = gql`
  query getUserInfo {
    getUserInfo {
      id
      username
      email
      fullName
      bio
      isPrivate
      followersCount
      followingCount
      followRequestsCount
      postsCount
    }
  }
`;

export const GET_USER_BY_USERNAME = gql`
  query getUserByUsername($username: String!) {
    getUserByUsername(username: $username) {
      id
      username
      email
      fullName
      bio
      isPrivate
      connectionStatus
      followersCount
      followingCount
      postsCount
    }
  }
`;

export const EDIT_USER = gql`
  mutation editUser(
    $fullName: String
    $email: String
    $bio: String
    $isPrivate: Boolean
  ) {
    editUser(
      input: {
        fullName: $fullName
        email: $email
        bio: $bio
        isPrivate: $isPrivate
      }
    ) {
      id
      username
      email
      fullName
      bio
      isPrivate
      followersCount
      followingCount
      followRequestsCount
      postsCount
    }
  }
`;
