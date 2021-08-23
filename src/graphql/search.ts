import { gql } from "@apollo/client";

export const SEARCH = gql`
  query search($expression: String!) {
    search(expression: $expression) {
      user {
        users {
          id
          username
          email
          fullname
          createdAt
          updatedAt
        }
      }
    }
  }
`;
