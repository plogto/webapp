import { gql } from "@apollo/client";
import { PageInfoFragment } from "./fragments/pageInfo";
import { TicketFragment } from "./fragments/ticket";
import { TicketMessageFragment } from "./fragments/ticketMessage";
import { UserFragment } from "./fragments/user";

export const GET_TICKETS = gql`
  ${UserFragment.short}
  ${TicketFragment.complete}
  ${PageInfoFragment.complete}
  query getTickets($first: Int, $after: String) {
    getTickets(pageInfo: { first: $first, after: $after }) {
      totalCount
      edges {
        node {
          ...TicketFragmentComplete
        }
      }
      pageInfo {
        ...PageInfoFragmentComplete
      }
    }
  }
`;

export const GET_TICKET_MESSAGES_BY_TICKET_URL = gql`
  ${UserFragment.short}
  ${TicketMessageFragment.default}
  ${PageInfoFragment.complete}
  query getTicketMessagesByTicketUrl(
    $ticketUrl: String!
    $first: Int
    $after: String
  ) {
    getTicketMessagesByTicketUrl(
      ticketUrl: $ticketUrl
      pageInfo: { first: $first, after: $after }
    ) {
      totalCount
      ticket {
        id
        subject
        status
        url
        permissions
      }
      edges {
        node {
          ...TicketMessageFragment
        }
      }
      pageInfo {
        ...PageInfoFragmentComplete
      }
    }
  }
`;

export const ADD_TICKET_MESSAGE = gql`
  ${TicketMessageFragment.default}
  mutation addTicketMessage(
    $ticketId: ID!
    $message: String!
    $attachment: [String!]
  ) {
    addTicketMessage(
      ticketId: $ticketId
      input: { message: $message, attachment: $attachment }
    ) {
      id
      ticket {
        id
      }
    }
  }
`;

export const CREATE_TICKET = gql`
  mutation createTicket(
    $subject: String!
    $message: String!
    $attachment: [String!]
  ) {
    createTicket(
      input: { subject: $subject, message: $message, attachment: $attachment }
    ) {
      id
      url
    }
  }
`;

export const UPDATE_TICKET_STATUS = gql`
  mutation updateTicketStatus($ticketId: ID!, $status: TicketStatus!) {
    updateTicketStatus(ticketId: $ticketId, status: $status) {
      id
      status
      permissions
    }
  }
`;
