import { gql } from "@apollo/client";

export const ADD_POST_COMMENT = gql`
  mutation addComment($parentId: ID, $postId: ID!, $content: String!) {
    addComment(
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
        fullName
      }
      updatedAt
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($commentId: ID!) {
    deleteComment(commentId: $commentId) {
      id
    }
  }
`;

export const GET_POST_COMMENTS = gql`
  query getComments($postId: ID!) {
    getComments(postId: $postId) {
      comments {
        id
        content
      }
      pagination {
        totalDocs
      }
    }
  }
`;
