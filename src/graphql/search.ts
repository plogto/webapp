import { gql } from "@apollo/client";
import { UserFragment } from "./fragments/user";

export const SEARCH = gql`
  ${UserFragment.short}
  query search($expression: String!) {
    search(expression: $expression) {
      user {
        users {
          ...UserFragmentShort
        }
      }
      tag {
        tags {
          id
          name
          count
        }
      }
    }
  }
`;
