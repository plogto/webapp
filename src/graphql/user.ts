import { gql } from "@apollo/client";

export const GET_USER_INFO = gql`
  query getUserInfo {
    getUserInfo {
      id
      username
      avatar
      background
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

export const CHECK_USERNAME = gql`
  query checkUsername($username: String!) {
    checkUsername(username: $username) {
      id
    }
  }
`;

export const CHECK_EMAIL = gql`
  query checkEmail($email: String!) {
    checkEmail(email: $email) {
      id
    }
  }
`;

export const GET_USER_BY_USERNAME = gql`
  query getUserByUsername($username: String!) {
    getUserByUsername(username: $username) {
      id
      username
      avatar
      background
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
    $username: String
    $avatar: String
    $background: String
    $fullName: String
    $email: String
    $bio: String
    $isPrivate: Boolean
  ) {
    editUser(
      input: {
        username: $username
        avatar: $avatar
        background: $background
        fullName: $fullName
        email: $email
        bio: $bio
        isPrivate: $isPrivate
      }
    ) {
      id
      username
      avatar
      background
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

export const CHANGE_PASSWORD = gql`
  mutation changePassword($oldPassword: String!, $newPassword: String!) {
    changePassword(
      input: { oldPassword: $oldPassword, newPassword: $newPassword }
    ) {
      user {
        id
        username
        email
        fullName
      }
      authToken {
        token
        expiredAt
      }
    }
  }
`;
