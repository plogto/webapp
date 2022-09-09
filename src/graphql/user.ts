import { gql } from "@apollo/client";
import { UserFragment } from "./fragments/user";

export const GET_USER_INFO = gql`
  ${UserFragment.complete}
  query getUserInfo {
    getUserInfo {
      ...UserFragmentComplete
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

export const GET_USER_BY_INVITATION_CODE = gql`
  ${UserFragment.short}
  query getUserByInvitationCode($invitationCode: String!) {
    getUserByInvitationCode(invitationCode: $invitationCode) {
      ...UserFragmentShort
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
  ${UserFragment.profile}
  query getUserByUsername($username: String!) {
    getUserByUsername(username: $username) {
      ...UserFragmentProfile
    }
  }
`;

export const EDIT_USER = gql`
  ${UserFragment.complete}
  mutation editUser(
    $username: String
    $backgroundColor: BackgroundColor
    $primaryColor: PrimaryColor
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
        backgroundColor: $backgroundColor
        primaryColor: $primaryColor
        avatar: $avatar
        background: $background
        fullName: $fullName
        email: $email
        bio: $bio
        isPrivate: $isPrivate
      }
    ) {
      ...UserFragmentComplete
    }
  }
`;

// TODO: refactor this query
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
