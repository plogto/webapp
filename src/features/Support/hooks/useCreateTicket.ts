import { useState } from "react";

export function useCreateTicket() {
  const [showCreateTicket, setIsShowCreateTicket] = useState(false);

  const openCreateTicket = () => setIsShowCreateTicket(true);
  const closeCreateTicket = () => setIsShowCreateTicket(false);

  return {
    openCreateTicket,
    closeCreateTicket,
    showCreateTicket,
  };
}
