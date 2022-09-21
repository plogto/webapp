import { gql } from "@apollo/client";
import { FileFragment } from "./file";
import { UserFragment } from "./user";

export const TicketMessageFragment = {
  default: gql`
    ${UserFragment.short}
    ${FileFragment.complete}
    fragment TicketMessageFragment on TicketMessage {
      id
      sender {
        ...UserFragmentShort
      }
      message
      read
      attachment {
        ...FileFragmentComplete
      }
      createdAt
    }
  `,
};
