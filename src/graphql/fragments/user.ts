import { gql } from "@apollo/client";
import { FileFragment } from "./file";

export const UserFragment = {
  short: gql`
    ${FileFragment.default}
    fragment UserFragmentShort on User {
      id
      username
      fullName
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
    }
  `,
  complete: gql`
    ${FileFragment.default}
    ${FileFragment.complete}
    fragment UserFragmentComplete on User {
      id
      username
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
    }
  `,
};