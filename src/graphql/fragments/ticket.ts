import { gql } from "@apollo/client";
import { TicketMessageFragment } from "./ticketMessage";
import { UserFragment } from "./user";

export const TicketFragment = {
  complete: gql`
    ${UserFragment.short}
    ${TicketMessageFragment.default}
    fragment TicketFragmentComplete on Ticket {
      id
      user {
        ...UserFragmentShort
      }
      subject
      lastMessage {
        ...TicketMessageFragment
      }
      url
      status
      permissions
      createdAt
    }
  `,
};
