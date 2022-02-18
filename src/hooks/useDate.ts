import { DateTime } from "luxon";
import { DateType } from "@enums";
import type { FormatFromNowProps, IsEditProps } from "./@types";

export function useDate() {
  function formatFromNow({ date, type }: FormatFromNowProps) {
    const dateTime = DateTime.fromISO(date);
    const time =
      type === DateType.SHORT
        ? dateTime.toRelative()
        : dateTime.toFormat("t · DD");

    switch (time) {
      // TODO: refactor this part
      case "0 seconds ago":
        return "now";
      default:
        return time;
    }
  }

  function isEdited({ createdAt, updatedAt }: IsEditProps) {
    const createTime = DateTime.fromISO(createdAt);
    const updateTime = DateTime.fromISO(updatedAt);

    return updateTime > createTime;
  }

  return { formatFromNow, isEdited };
}
