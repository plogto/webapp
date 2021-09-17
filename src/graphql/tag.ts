import { gql } from "@apollo/client";

export const GET_TAG_BY_TAG_NAME = gql`
  query getTagByTagName($tagName: String!) {
    getTagByTagName(tagName: $tagName) {
      id
      name
      count
    }
  }
`;

export const GET_TRENDS = gql`
  query getTrends {
    getTrends {
      tags {
        id
        name
        count
      }
    }
  }
`;
