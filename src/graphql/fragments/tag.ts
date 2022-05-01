import { gql } from "@apollo/client";

export const TagFragment = {
  default: gql`
    fragment TagFragment on Tag {
      id
      name
      count
    }
  `,
};
