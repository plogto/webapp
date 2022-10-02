import { gql } from "@apollo/client";

export const LOGIN = gql`
  query login($username: String!, $password: String!) {
    login(input: { username: $username, password: $password }) {
      authToken {
        token
        expiredAt
      }
    }
  }
`;

export const REGISTER = gql`
  mutation register($fullName: String!, $email: String!, $password: String!) {
    register(
      input: { fullName: $fullName, email: $email, password: $password }
    ) {
      authToken {
        token
        expiredAt
      }
    }
  }
`;

export const O_AUTH_GOOGLE = gql`
  mutation oAuthGoogle($credential: String!, $invitationCode: String) {
    oAuthGoogle(
      input: { credential: $credential, invitationCode: $invitationCode }
    ) {
      authToken {
        token
        expiredAt
      }
    }
  }
`;
