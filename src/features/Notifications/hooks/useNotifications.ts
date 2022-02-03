import { useMemo } from "react";
import { useAccountContext } from "@contexts/AccountContext";

export function useNotifications() {
  const { user } = useAccountContext();

  const followRequestsCount = useMemo(
    () => user?.followRequestsCount,
    [user?.followRequestsCount],
  );

  return { followRequestsCount };
}
