import { Ticket } from "@t/ticket";

export interface AddTicketFormProps {
  subject?: string;
  message: string;
  attachment?: string[];
}

export interface AddTicketProps {
  ticket?: Ticket;
  showSubject?: boolean;
  submitButtonTitle: string;
  onCloseButton: () => void;
}

export interface UseAddTicketProps {
  showSubject?: boolean;
  ticket?: Ticket;
  onCloseButton: () => void;
}
