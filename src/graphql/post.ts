import { gql } from "@apollo/client";

export const GET_USER_POSTS_BY_USERNAME = gql`
  query getUserPostsByUsername($username: String!) {
    getUserPostsByUsername(username: $username) {
      posts {
        id
        user {
          id
          username
          fullname
        }
        content
        status
        createdAt
        updatedAt
      }
      pagination {
        totalDocs
        totalPages
        page
        limit
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($content: String!) {
    addPost(input: { content: $content }) {
      id
      user {
        id
        username
        fullname
      }
      content
      status
      createdAt
      updatedAt
    }
  }
`;
