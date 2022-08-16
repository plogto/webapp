import { gql } from "@apollo/client";
import { FileFragment } from "./file";
import { UserFragment } from "./user";

export const PostFragment = {
  default: gql`
    ${UserFragment.default}
    ${FileFragment.complete}
    fragment PostFragment on Post {
      id
      url
      user {
        ...UserFragment
      }
      isLiked {
        id
      }
      isSaved {
        id
      }
      likes {
        totalCount
      }
      content
      attachment {
        ...FileFragmentComplete
      }
      createdAt
      updatedAt
    }
  `,
};
