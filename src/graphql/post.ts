import { gql } from "@apollo/client";
import { FileFragment } from "./fragments/file";
import { PaginationFragment } from "./fragments/pagination";
import { PostFragment } from "./fragments/post";
import { UserFragment } from "./fragments/user";

export const GET_SHORT_POST_BY_URL = gql`
  ${UserFragment.short}
  ${FileFragment.complete}
  ${PaginationFragment.complete}
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
      likes {
        pagination {
          ...PaginationFragmentComplete
        }
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
  query getPostsByUsername($username: String!, $page: Int, $limit: Int) {
    getPostsByUsername(
      username: $username
      input: { page: $page, limit: $limit }
    ) {
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
  ${PaginationFragment.complete}
  ${PostFragment.default}
  query getSavedPosts($page: Int, $limit: Int) {
    getSavedPosts(input: { page: $page, limit: $limit }) {
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
  ${PaginationFragment.complete}
  ${PostFragment.default}
  query getPostsByTagName($tagName: String!, $page: Int, $limit: Int) {
    getPostsByTagName(
      tagName: $tagName
      input: { page: $page, limit: $limit }
    ) {
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

export const GET_TIMELINE_POSTS = gql`
  ${PaginationFragment.complete}
  ${PostFragment.default}
  query getTimelinePosts($page: Int, $limit: Int) {
    getTimelinePosts(input: { page: $page, limit: $limit }) {
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
  mutation addPost($parentId: ID, $content: String!, $attachment: [String!]) {
    addPost(
      input: { content: $content, attachment: $attachment, parentId: $parentId }
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

export const EDIT_POST = gql`
  ${UserFragment.short}
  ${FileFragment.complete}
  mutation editPost($postId: ID!, $content: String!) {
    editPost(postId: $postId, input: { content: $content }) {
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
