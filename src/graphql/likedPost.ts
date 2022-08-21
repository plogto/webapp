import { gql } from "@apollo/client";

export const LIKE_POST = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      id
      post {
        id
        isLiked {
          id
        }
        likes {
          totalCount
        }
      }
    }
  }
`;
