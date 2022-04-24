import { gql } from "@apollo/client";

export const LOGIN = gql`
  query login($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      user {
        id
        username
        backgroundColor
        primaryColor
        fullName
        avatar {
          id
          name
        }
        background {
          id
          name
          width
          height
        }
        email
      }
      authToken {
        token
        expiredAt
      }
    }
  }
`;
