import { TicketStatusType } from "@enums";
import type { PageInfoRequest } from "@t/pageInfo";
import type {
  Ticket,
  TicketMessage,
  TicketMessagesWithPageInfo,
  TicketsWithPageInfo,
} from "@t/ticket";

export interface GetTicketsQuery {
  getTickets: TicketsWithPageInfo;
}

export type GetTicketsQueryRequest = PageInfoRequest;

export interface GetTicketMessagesByTicketUrlQuery {
  getTicketMessagesByTicketUrl: TicketMessagesWithPageInfo;
}

export interface GetTicketMessagesByTicketUrlQueryRequest
  extends PageInfoRequest {
  ticketUrl: string;
}

export interface CreateTicketMutation {
  createTicket: Ticket;
}

export interface CreateTicketMutationRequest {
  subject: string;
  message: string;
  attachment?: string[];
}

export interface AddTicketMessageMutation {
  addTicketMessage: TicketMessage;
}

export interface AddTicketMessageMutationRequest {
  ticketId: string;
  message: string;
  attachment?: string[];
}

export interface UpdateTicketStatusMutation {
  updateTicketStatus: Ticket;
}

export interface UpdateTicketStatusMutationRequest {
  ticketId: string;
  status: TicketStatusType;
}
