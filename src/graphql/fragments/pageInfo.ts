import { gql } from "@apollo/client";

export const PageInfoFragment = {
  complete: gql`
    fragment PageInfoFragmentComplete on PageInfo {
      endCursor
      hasNextPage
    }
  `,
};
