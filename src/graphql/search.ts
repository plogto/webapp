import { gql } from "@apollo/client";
import { TagFragment } from "./fragments/tag";
import { UserFragment } from "./fragments/user";

export const SEARCH = gql`
  ${UserFragment.short}
  ${TagFragment.default}
  query search($expression: String!) {
    search(expression: $expression) {
      user {
        edges {
          node {
            ...UserFragmentShort
          }
        }
      }
      tag {
        edges {
          node {
            ...TagFragment
          }
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
        edges {
          node {
            ...TagFragment
          }
        }
      }
    }
  }
`;
