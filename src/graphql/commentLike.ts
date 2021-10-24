import { gql } from "@apollo/client";

export const LIKE_COMMENT = gql`
  mutation likeComment($commentId: ID!) {
    likeComment(commentId: $commentId) {
      id
    }
  }
`;

export const UNLIKE_COMMENT = gql`
  mutation unlikeComment($commentId: ID!) {
    unlikeComment(commentId: $commentId) {
      id
    }
  }
`;
