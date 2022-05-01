import { gql } from "@apollo/client";
import { TagFragment } from "./fragments/tag";

export const GET_TAG_BY_TAG_NAME = gql`
  ${TagFragment.default}
  query getTagByTagName($tagName: String!) {
    getTagByTagName(tagName: $tagName) {
      ...TagFragment
    }
  }
`;

export const GET_TRENDS = gql`
  ${TagFragment.default}
  query getTrends {
    getTrends {
      tags {
        ...TagFragment
      }
    }
  }
`;
