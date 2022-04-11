import type { DateType } from "@enums";
import type { DateSize } from "@t/size";

export type PostDateTimeProps = {
  size?: DateSize;
  type: DateType;
  createdAt: string;
  updatedAt: string;
};
