import { StatusType } from "@enums";

export interface StatusProps {
  status: keyof StatusType;
}
