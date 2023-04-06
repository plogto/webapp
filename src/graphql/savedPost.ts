import { gql } from "@apollo/client";

export const SAVE_POST = gql`
  mutation savePost($postId: UUID!) {
    savePost(postId: $postId) {
      id
      post {
        id
        isSaved {
          id
        }
      }
    }
  }
`;
