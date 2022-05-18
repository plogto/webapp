import { gql } from "@apollo/client";
import { FileFragment } from "./fragments/file";
import { PaginationFragment } from "./fragments/pagination";
import { PostFragment } from "./fragments/post";
import { UserFragment } from "./fragments/user";

export const GET_SHORT_POST_BY_URL = gql`
  ${UserFragment.short}
  ${FileFragment.complete}
  query getPostByUrl($url: String!) {
    getPostByUrl(url: $url) {
      id
      url
      user {
        ...UserFragmentShort
      }
      content
      attachment {
        ...FileFragmentComplete
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_POST_BY_URL = gql`
  ${PostFragment.default}
  query getPostByUrl($url: String!) {
    getPostByUrl(url: $url) {
      ...PostFragment
      parent {
        ...PostFragment
      }
      replies {
        posts {
          ...PostFragment
          replies {
            posts {
              ...PostFragment
            }
            pagination {
              totalDocs
            }
          }
        }
        pagination {
          totalDocs
        }
      }
    }
  }
`;

export const GET_POSTS_BY_USERNAME = gql`
  ${PaginationFragment.complete}
  ${PostFragment.default}
  query getPostsByUsername($username: String!) {
    getPostsByUsername(username: $username) {
      posts {
        ...PostFragment
        replies {
          pagination {
            totalDocs
          }
        }
      }
      pagination {
        ...PaginationFragmentComplete
      }
    }
  }
`;

export const GET_SAVED_POSTS = gql`
  ${UserFragment.default}
  ${FileFragment.complete}
  ${PaginationFragment.complete}
  ${PostFragment.default}
  query getSavedPosts {
    getSavedPosts {
      posts {
        ...PostFragment
        replies {
          pagination {
            totalDocs
          }
        }
      }
      pagination {
        ...PaginationFragmentComplete
      }
    }
  }
`;

export const GET_POSTS_BY_TAG_NAME = gql`
  ${UserFragment.default}
  ${FileFragment.complete}
  ${PaginationFragment.complete}
  ${PostFragment.default}
  query getPostsByTagName($tagName: String!) {
    getPostsByTagName(tagName: $tagName) {
      posts {
        ...PostFragment
        replies {
          pagination {
            totalDocs
          }
        }
      }
      pagination {
        ...PaginationFragmentComplete
      }
    }
  }
`;

export const ADD_POST = gql`
  ${UserFragment.short}
  ${FileFragment.complete}
  mutation addPost($postId: ID, $content: String!, $attachment: [String!]) {
    addPost(
      postId: $postId
      input: { content: $content, attachment: $attachment }
    ) {
      id
      url
      user {
        ...UserFragmentShort
      }
      content
      attachment {
        ...FileFragmentComplete
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
