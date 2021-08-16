import { gql } from "@apollo/client";

export const GET_USER_POSTS_BY_USERNAME = gql`
  query getUserPostsByUsername($username: String!) {
    getUserPostsByUsername(username: $username) {
      id
      user {
        id
        username
        fullname
      }
      content
      status
      createdAt
      updatedAt
    }
  }
`;
