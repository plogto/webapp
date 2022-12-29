import { gql } from "@apollo/client";
import { FileFragment } from "./fragments/file";
import { PageInfoFragment } from "./fragments/pageInfo";
import { PostFragment } from "./fragments/post";
import { UserFragment } from "./fragments/user";

export const GET_SHORT_POST_BY_URL = gql`
  ${UserFragment.short}
  ${FileFragment.complete}
  ${PageInfoFragment.complete}
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
        totalCount
        pageInfo {
          ...PageInfoFragmentComplete
        }
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_POST_BY_URL = gql`
  ${PostFragment.default}
  ${PageInfoFragment.complete}
  query getPostByUrl($url: String!) {
    getPostByUrl(url: $url) {
      ...PostFragment
      parent {
        ...PostFragment
      }
      replies {
        totalCount
        edges {
          cursor
          node {
            ...PostFragment
            replies {
              totalCount
              edges {
                cursor
                node {
                  ...PostFragment
                }
              }
              pageInfo {
                ...PageInfoFragmentComplete
              }
            }
          }
        }
        pageInfo {
          ...PageInfoFragmentComplete
        }
      }
    }
  }
`;

export const GET_POSTS_BY_USERNAME = gql`
  ${PageInfoFragment.complete}
  ${PostFragment.default}
  query getPostsByUsername($username: String!, $first: Int, $after: String) {
    getPostsByUsername(
      username: $username
      pageInfoInput: { first: $first, after: $after }
    ) {
      totalCount
      edges {
        cursor
        node {
          ...PostFragment
          replies {
            totalCount
          }
        }
      }
      pageInfo {
        ...PageInfoFragmentComplete
      }
    }
  }
`;

export const GET_REPLIES_BY_USERNAME = gql`
  ${PageInfoFragment.complete}
  ${PostFragment.default}
  query getRepliesByUsername($username: String!, $first: Int, $after: String) {
    getRepliesByUsername(
      username: $username
      pageInfoInput: { first: $first, after: $after }
    ) {
      totalCount
      edges {
        cursor
        node {
          ...PostFragment
          replies {
            totalCount
          }
        }
      }
      pageInfo {
        ...PageInfoFragmentComplete
      }
    }
  }
`;

export const GET_SAVED_POSTS = gql`
  ${PageInfoFragment.complete}
  ${PostFragment.default}
  query getSavedPosts($first: Int, $after: String) {
    getSavedPosts(pageInfoInput: { first: $first, after: $after }) {
      totalCount
      edges {
        cursor
        node {
          post {
            ...PostFragment
            replies {
              totalCount
            }
          }
        }
      }
      pageInfo {
        ...PageInfoFragmentComplete
      }
    }
  }
`;

export const GET_LIKED_POSTS_BY_USERNAME = gql`
  ${PageInfoFragment.complete}
  ${PostFragment.default}
  query getLikedPostsByUsername(
    $username: String!
    $first: Int
    $after: String
  ) {
    getLikedPostsByUsername(
      username: $username
      pageInfo: { first: $first, after: $after }
    ) {
      totalCount
      edges {
        cursor
        node {
          post {
            ...PostFragment
            replies {
              totalCount
            }
          }
        }
      }
      pageInfo {
        ...PageInfoFragmentComplete
      }
    }
  }
`;

export const GET_POSTS_BY_TAG_NAME = gql`
  ${PageInfoFragment.complete}
  ${PostFragment.default}
  query getPostsByTagName($tagName: String!, $first: Int, $after: String) {
    getPostsByTagName(
      tagName: $tagName
      pageInfoInput: { first: $first, after: $after }
    ) {
      totalCount
      edges {
        cursor
        node {
          ...PostFragment
          replies {
            totalCount
          }
        }
      }
      pageInfo {
        ...PageInfoFragmentComplete
      }
    }
  }
`;

export const GET_TIMELINE_POSTS = gql`
  ${PageInfoFragment.complete}
  ${PostFragment.default}
  query getTimelinePosts($first: Int, $after: String) {
    getTimelinePosts(pageInfoInput: { first: $first, after: $after }) {
      totalCount
      edges {
        cursor
        node {
          ...PostFragment
          replies {
            totalCount
          }
        }
      }
      pageInfo {
        ...PageInfoFragmentComplete
      }
    }
  }
`;

export const GET_EXPLORE_POSTS = gql`
  ${PageInfoFragment.complete}
  ${PostFragment.default}
  query getExplorePosts($first: Int, $after: String) {
    getExplorePosts(pageInfo: { first: $first, after: $after }) {
      totalCount
      edges {
        cursor
        node {
          ...PostFragment
          replies {
            totalCount
          }
        }
      }
      pageInfo {
        ...PageInfoFragmentComplete
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
