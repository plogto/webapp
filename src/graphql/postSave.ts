import { gql } from "@apollo/client";

export const SAVE_POST = gql`
  mutation savePost($postId: ID!) {
    savePost(postId: $postId) {
      id
    }
  }
`;

export const UNSAVE_POST = gql`
  mutation unsavePost($postId: ID!) {
    unsavePost(postId: $postId) {
      id
    }
  }
`;
