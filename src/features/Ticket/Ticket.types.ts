import type { MenuProps } from "@components/Menu/Menu.types";
import type { Ticket } from "@t/ticket";

export interface TicketHeaderProps {
  menuItems: MenuProps["items"];
  ticket: Ticket;
}
