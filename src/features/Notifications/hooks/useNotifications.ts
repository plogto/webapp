import { useAccount } from "@/context/AccountContext";

export function useNotifications() {
  const { user } = useAccount();

  return { followRequestsCount: user?.followRequestsCount };
}
