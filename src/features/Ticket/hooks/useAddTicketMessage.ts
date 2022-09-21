import { useState } from "react";

export function useAddTicketMessage() {
  const [isShowAddTicket, setIsShowAddTicket] = useState(false);

  const openAddTicket = () => setIsShowAddTicket(true);
  const closeAddTicket = () => setIsShowAddTicket(false);

  return {
    openAddTicket,
    closeAddTicket,
    isShowAddTicket,
  };
}
