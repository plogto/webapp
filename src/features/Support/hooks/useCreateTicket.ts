import { useState } from "react";

export function useCreateTicket() {
  const [isShowCreateTicket, setIsShowCreateTicket] = useState(false);

  const openCreateTicket = () => setIsShowCreateTicket(true);
  const closeCreateTicket = () => setIsShowCreateTicket(false);

  return {
    openCreateTicket,
    closeCreateTicket,
    isShowCreateTicket,
  };
}
