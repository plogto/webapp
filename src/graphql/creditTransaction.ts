import { gql } from "@apollo/client";
import { CreditTransactionFragment } from "./fragments/creditTransaction";
import { PageInfoFragment } from "./fragments/pageInfo";

export const GET_CREDIT_TRANSACTIONS = gql`
  ${CreditTransactionFragment.default}
  ${PageInfoFragment.complete}
  query getCreditTransactions($first: Int, $after: String) {
    getCreditTransactions(pageInfoInput: { first: $first, after: $after }) {
      totalCount
      edges {
        node {
          ...CreditTransactionFragment
        }
      }
      pageInfo {
        ...PageInfoFragmentComplete
      }
    }
  }
`;
