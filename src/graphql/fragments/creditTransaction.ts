import { gql } from "@apollo/client";
import { FileFragment } from "./file";
import { UserFragment } from "./user";

export const CreditTransactionFragment = {
  default: gql`
    ${FileFragment.default}
    ${UserFragment.default}
    fragment CreditTransactionFragment on CreditTransaction {
      id
      recipient {
        ...UserFragment
      }
      type
      amount
      info {
        status
        description
        descriptionVariables {
          id
          type
          key
          content
          url
          image
        }
        template {
          id
          name
          content
        }
        createdAt
      }
    }
  `,
};
