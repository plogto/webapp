import { useAccountContext } from "@context/AccountContext";
import { useEffect, useMemo } from "react";

export function useNotifications() {
  const { user } = useAccountContext();

  const followRequestsCount = useMemo(
    () => user?.followRequestsCount,
    [user?.followRequestsCount],
  );

  return { followRequestsCount };
}
