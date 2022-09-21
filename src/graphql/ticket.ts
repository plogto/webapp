import { gql } from "@apollo/client";
import { PageInfoFragment } from "./fragments/pageInfo";
import { TicketMessageFragment } from "./fragments/ticketMessage";
import { UserFragment } from "./fragments/user";

export const GET_TICKETS = gql`
  ${UserFragment.short}
  ${TicketMessageFragment.default}
  ${PageInfoFragment.complete}
  query getTickets($first: Int, $after: String) {
    getTickets(pageInfo: { first: $first, after: $after }) {
      totalCount
      edges {
        node {
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
          createdAt
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
        lastMessage {
          ...TicketMessageFragment
        }
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
