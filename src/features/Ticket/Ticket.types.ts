import { TicketPermissionType } from "@enums";
import type { MenuProps } from "@components/Menu/Menu.types";
import type { ConfirmationModalProps } from "@components/Modal/Modal.types";
import type { Ticket } from "@t/ticket";

export interface TicketHeaderProps {
  menuItems: MenuProps["items"];
  ticket: Ticket;
}

export interface UseUpdateTicketStatusProps {
  ticketId?: string;
}

export interface UseTicketProps {
  openAddTicket: () => void;
}

export interface ConfirmationModal extends ConfirmationModalProps {
  key: TicketPermissionType;
}

export type ConfirmationModals = {
  [key in Exclude<
    TicketPermissionType,
    TicketPermissionType.NEW_MESSAGE
  >]: ConfirmationModal;
};
