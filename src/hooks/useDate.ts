import { DateTime } from "luxon";
import { IsEditProps } from "./@types";
import { DateType } from "@enums";

export function useDate() {
  function formatFromNow(date: string, type: DateType) {
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
