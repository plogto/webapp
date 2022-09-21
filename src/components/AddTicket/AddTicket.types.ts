import { Ticket } from "@t/ticket";

export interface AddTicketFormProps {
  subject?: string;
  message: string;
  attachment?: string[];
}

export interface AddTicketProps {
  ticket?: Ticket;
  isShowSubject?: boolean;
  submitButtonTitle: string;
  onCloseButton: () => void;
}

export interface UseAddTicketProps {
  isShowSubject?: boolean;
  ticket?: Ticket;
  onCloseButton: () => void;
}
