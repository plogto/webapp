import { gql } from "@apollo/client";

export const GET_TAG_BY_TAG_NAME = gql`
  query getTagByTagName($tagName: String!) {
    getTagByTagName(tagName: $tagName) {
      id
      name
      count
      createdAt
      updatedAt
    }
  }
`;
