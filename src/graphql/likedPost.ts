import { gql } from "@apollo/client";
import { UserFragment } from "./fragments/user";

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

export const GET_LIKED_POSTS_BY_POST_ID = gql`
  ${UserFragment.short}
  query getLikedPostsByPostId($postId: ID!) {
    getLikedPostsByPostId(postId: $postId) {
      totalCount
      edges {
        cursor
        node {
          user {
            ...UserFragmentShort
          }
        }
      }
      pageInfo {
        ...PageInfoFragmentComplete
      }
    }
  }
`;
