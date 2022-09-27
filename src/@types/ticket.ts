import { TicketPermissionType, TicketStatusType } from "@enums";
import type { WithPageInfo } from "@t";
import type { Attachment } from "./attachment";
import type { User } from "./user";

export interface TicketMessage {
  id: string;
  sender: User;
  message: string;
  read?: boolean;
  attachment: Attachment[];
  createdAt: string;
}

export interface Ticket {
  id: string;
  user: User;
  subject: string;
  lastMessage: TicketMessage;
  status: TicketStatusType;
  url: string;
  permissions: TicketPermissionType[];
  createdAt: string;
}

export type TicketsWithPageInfo = WithPageInfo<Ticket>;
export type TicketMessagesWithPageInfo = WithPageInfo<TicketMessage> & {
  ticket: Ticket;
};
