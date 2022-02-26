import { gql } from "@apollo/client";

export const LIKE_POST = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      id
      isLiked {
        id
      }
      likes {
        pagination {
          totalDocs
        }
      }
    }
  }
`;
