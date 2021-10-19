import { gql } from "@apollo/client";

export const ADD_POST_COMMENT = gql`
  mutation addPostComment($parentId: ID, $postId: ID!, $content: String!) {
    addPostComment(
      input: { parentId: $parentId, postId: $postId, content: $content }
    ) {
      id
      parent {
        id
      }
      content
      user {
        id
        username
        fullname
      }
      updatedAt
    }
  }
`;

export const GET_POST_COMMENTS = gql`
  query getPostComments($postId: ID!) {
    getPostComments(postId: $postId) {
      postComments {
        id
        content
      }
      pagination {
        totalDocs
      }
    }
  }
`;
