import { gql } from "@apollo/client";

export const GET_POST_BY_URL = gql`
  query getPostByUrl($url: String!) {
    getPostByUrl(url: $url) {
      id
      url
      user {
        id
        username
        fullName
        avatar
        background
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
      replies {
        posts {
          id
          url
          user {
            id
            username
            fullName
            avatar
            background
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
          replies {
            posts {
              id
              url
              user {
                id
                username
                fullName
                avatar
                background
                connectionStatus
              }
              isLiked {
                id
              }
              isSaved {
                id
              }
              likes {
                pagination {
                  totalDocs
                }
              }
              content
              attachment
              createdAt
              updatedAt
            }
            pagination {
              totalDocs
            }
          }
          content
          attachment
          createdAt
          updatedAt
        }
        pagination {
          totalDocs
        }
      }
      content
      attachment
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
          fullName
          avatar
          background
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
        replies {
          pagination {
            totalDocs
          }
        }
        content
        attachment
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
          fullName
          avatar
          background
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
        replies {
          pagination {
            totalDocs
          }
        }
        content
        attachment
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
  mutation addPost($content: String!, $attachment: [String!]) {
    addPost(input: { content: $content, attachment: $attachment }) {
      id
      url
      user {
        id
        username
        fullName
        avatar
        background
      }
      content
      attachment
      createdAt
      updatedAt
    }
  }
`;

export const REPLY_POST = gql`
  mutation replyPost($postId: ID!, $content: String!) {
    replyPost(postId: $postId, input: { content: $content }) {
      id
      parent {
        id
      }
      content
      attachment
      user {
        id
        username
        fullName
        avatar
        background
      }
      updatedAt
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId) {
      id
    }
  }
`;
