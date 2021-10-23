import { gql } from "@apollo/client";

export const GET_POST_BY_URL = gql`
  query getPostByUrl($url: String!) {
    getPostByUrl(url: $url) {
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
        comments {
          id
          user {
            id
            username
            fullname
          }
          children {
            comments {
              id
              user {
                id
                username
                fullname
              }
              content
              updatedAt
            }
            pagination {
              totalDocs
            }
          }
          content
          updatedAt
        }
        pagination {
          totalDocs
        }
      }
      content
      createdAt
      updatedAt
    }
  }
`;

export const GET_POSTS_BY_USERNAME = gql`
  query getPostsByUsername($username: String!) {
    getPostsByUsername(username: $username) {
      posts {
        id
        url
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

export const GET_POSTS_BY_TAG_NAME = gql`
  query getPostsByTagName($tagName: String!) {
    getPostsByTagName(tagName: $tagName) {
      posts {
        id
        url
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

export const ADD_POST = gql`
  mutation addPost($content: String!) {
    addPost(input: { content: $content }) {
      id
      url
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
