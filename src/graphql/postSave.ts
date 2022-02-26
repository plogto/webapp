import { gql } from "@apollo/client";

export const SAVE_POST = gql`
  mutation savePost($postId: ID!) {
    savePost(postId: $postId) {
      id
      isSaved {
        id
      }
    }
  }
`;
