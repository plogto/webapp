import { gql } from "@apollo/client";
import { FileFragment } from "./file";

export const UserFragment = {
  short: gql`
    ${FileFragment.default}
    fragment UserFragmentShort on User {
      id
      username
      fullName
      isVerified
      avatar {
        ...FileFragment
      }
    }
  `,
  default: gql`
    ${FileFragment.default}
    fragment UserFragment on User {
      id
      username
      fullName
      isVerified
      connectionStatus
      avatar {
        ...FileFragment
      }
    }
  `,
  profile: gql`
    ${FileFragment.default}
    ${FileFragment.complete}
    fragment UserFragmentProfile on User {
      id
      username
      fullName
      isVerified
      connectionStatus
      avatar {
        ...FileFragment
      }
      background {
        ...FileFragmentComplete
      }
      bio
      isPrivate
      connectionStatus
      followersCount
      followingCount
      postsCount
      credits
    }
  `,
  complete: gql`
    ${FileFragment.default}
    ${FileFragment.complete}
    fragment UserFragmentComplete on User {
      id
      username
      isVerified
      backgroundColor
      primaryColor
      avatar {
        ...FileFragment
      }
      background {
        ...FileFragmentComplete
      }
      email
      fullName
      bio
      isPrivate
      followersCount
      followingCount
      followRequestsCount
      postsCount
      invitationCode
      credits
    }
  `,
};
