import { gql } from "@apollo/client";
import { PageInfoFragment } from "./fragments/pageInfo";
import { UserFragment } from "./fragments/user";

export const LIKE_POST = gql`
  mutation likePost($postId: UUID!) {
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
  ${UserFragment.default}
  ${PageInfoFragment.complete}
  query getLikedPostsByPostId($postId: UUID!) {
    getLikedPostsByPostId(postId: $postId) {
      totalCount
      edges {
        cursor
        node {
          user {
            ...UserFragment
          }
        }
      }
      pageInfo {
        ...PageInfoFragmentComplete
      }
    }
  }
`;
