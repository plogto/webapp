import { useAccountContext } from "@context/AccountContext";

export function useNotifications() {
  const { user } = useAccountContext();

  return { followRequestsCount: user?.followRequestsCount };
}
