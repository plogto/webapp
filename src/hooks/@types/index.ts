import type { ReactNode } from "react";
import { DateType } from "@enums";

export type ActiveClass = (props: {
  href: string;
  className: string;
}) => string;

export interface ParsePostProps {
  content: string;
  hashtagComponent: ReactNode;
}

export interface PostStore {
  [key: string]: {
    key: string;
    component?: ReactNode;
  };
}

export interface FormatFromNowProps {
  date: string;
  type: DateType;
}

export interface IsEditProps {
  createdAt: string;
  updatedAt: string;
}

export interface UseImageProfileProps {
  key: "avatar" | "background";
}
