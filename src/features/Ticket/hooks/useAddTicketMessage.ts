import { useState } from "react";

export function useAddTicketMessage() {
  const [showAddTicket, setIsShowAddTicket] = useState(false);

  const openAddTicket = () => setIsShowAddTicket(true);
  const closeAddTicket = () => setIsShowAddTicket(false);

  return {
    openAddTicket,
    closeAddTicket,
    showAddTicket,
  };
}
