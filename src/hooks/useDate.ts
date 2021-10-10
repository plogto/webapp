import { DateTime } from "luxon";

export function useDate() {
  function formatFromNow(date: string) {
    return DateTime.fromISO(date).toRelative();
  }

  return { formatFromNow };
}
