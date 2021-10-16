import { DateTime } from "luxon";

export function useDate() {
  // TODO: refactor this part
  function formatFromNow(date: string) {
    const time = DateTime.fromISO(date).toRelative();
    switch (time) {
      case "0 seconds ago":
        return "now";
      default:
        return time;
    }
  }

  return { formatFromNow };
}
