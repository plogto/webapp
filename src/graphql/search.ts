import { gql } from "@apollo/client";
import { TagFragment } from "./fragments/tag";
import { UserFragment } from "./fragments/user";

export const SEARCH = gql`
  ${UserFragment.short}
  ${TagFragment.default}
  query search($expression: String!) {
    search(expression: $expression) {
      user {
        users {
          ...UserFragmentShort
        }
      }
      tag {
        tags {
          ...TagFragment
        }
      }
    }
  }
`;

export const SEARCH_TAGS = gql`
  ${TagFragment.default}
  query search($expression: String!) {
    search(expression: $expression) {
      tag {
        tags {
          ...TagFragment
        }
      }
    }
  }
`;
