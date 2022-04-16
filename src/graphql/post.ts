import { gql } from "@apollo/client";

export const GET_SHORT_POST_BY_URL = gql`
  query getPostByUrl($url: String!) {
    getPostByUrl(url: $url) {
      id
      url
      user {
        id
        username
        fullName
        avatar {
          id
          name
        }
      }
      content
      attachment {
        id
        name
        width
        height
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_POST_BY_URL = gql`
  query getPostByUrl($url: String!) {
    getPostByUrl(url: $url) {
      id
      url
      user {
        id
        username
        fullName
        avatar {
          id
          name
        }
        background {
          id
          name
          width
          height
        }
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
            avatar {
              id
              name
            }
            background {
              id
              name
            }
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
                avatar {
                  id
                  name
                }
                background {
                  id
                  name
                }
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
              attachment {
                id
                name
                width
                height
              }
              createdAt
              updatedAt
            }
            pagination {
              totalDocs
            }
          }
          content
          attachment {
            id
            name
            width
            height
          }
          createdAt
          updatedAt
        }
        pagination {
          totalDocs
        }
      }
      content
      attachment {
        id
        name
        width
        height
      }
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
          avatar {
            id
            name
          }
          background {
            id
            name
            width
            height
          }
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
        attachment {
          id
          name
          width
          height
        }
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
          avatar {
            id
            name
          }
          background {
            id
            name
            width
            height
          }
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
        attachment {
          id
          name
          width
          height
        }
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
        avatar {
          id
          name
        }
        background {
          id
          name
          width
          height
        }
      }
      content
      attachment {
        id
        name
        width
        height
      }
      createdAt
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
