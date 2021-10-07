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
          connectionStatus
        }
        isLiked {
          id
        }
        isSaved {
          id
        }
        likes {
          postLikes {
            id
          }
          pagination {
            totalDocs
          }
        }
        comments {
          pagination {
            totalDocs
          }
        }
        content
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

export const GET_USER_POSTS_BY_TAG_NAME = gql`
  query getUserPostsByTagName($tagName: String!) {
    getUserPostsByTagName(tagName: $tagName) {
      posts {
        id
        user {
          id
          username
          fullname
          connectionStatus
        }
        isLiked {
          id
        }
        isSaved {
          id
        }
        likes {
          postLikes {
            id
          }
          pagination {
            totalDocs
          }
        }
        content
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
      createdAt
      updatedAt
    }
  }
`;
