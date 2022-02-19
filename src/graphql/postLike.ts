import { gql } from "@apollo/client";

export const LIKE_POST = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      id
      post {
        id
      }
    }
  }
`;

export const UNLIKE_POST = gql`
  mutation unlikePost($postId: ID!) {
    unlikePost(postId: $postId) {
      id
      post {
        id
      }
    }
  }
`;
