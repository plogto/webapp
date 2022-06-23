import { gql } from "@apollo/client";

export const PaginationFragment = {
  complete: gql`
    fragment PaginationFragmentComplete on Pagination {
      page
      limit
      totalDocs
      totalPages
      nextPage
    }
  `,
};
