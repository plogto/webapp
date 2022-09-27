import { useCallback } from "react";
import { TicketStatusType } from "@enums";
import { useMutation } from "@apollo/client";
import type {
  UpdateTicketStatusMutation,
  UpdateTicketStatusMutationRequest,
} from "@graphql/@types/ticket";
import { GET_TICKETS, UPDATE_TICKET_STATUS } from "@graphql/ticket";
import type { UseUpdateTicketStatusProps } from "../Ticket.types";

export function useUpdateTicketStatus(props: UseUpdateTicketStatusProps) {
  const { ticketId } = props;

  const [updateTicketStatus, { loading }] = useMutation<
    UpdateTicketStatusMutation,
    UpdateTicketStatusMutationRequest
  >(UPDATE_TICKET_STATUS);

  const updateTicket = useCallback(
    (status: TicketStatusType) => {
      ticketId &&
        updateTicketStatus({
          variables: {
            ticketId,
            status,
          },
          refetchQueries: [{ query: GET_TICKETS }],
        });
    },
    [ticketId, updateTicketStatus],
  );

  const openTicket = () => updateTicket(TicketStatusType.OPEN);
  const closeTicket = () => updateTicket(TicketStatusType.CLOSED);
  const approveTicket = () => updateTicket(TicketStatusType.APPROVED);
  const solveTicket = () => updateTicket(TicketStatusType.SOLVED);

  return { openTicket, closeTicket, approveTicket, solveTicket, loading };
}
