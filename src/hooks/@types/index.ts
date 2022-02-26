import { DateType } from "@enums";
import type { ReactNode } from "react";

export type ActiveClass = (props: {
  href: string;
  className: string;
}) => string;

export type ParsePostProps = {
  content: string;
  hashtagComponent: ReactNode;
};

export type PostStore = {
  [key: string]: {
    key: string;
    component?: ReactNode;
  };
};

export type FormatFromNowProps = {
  date: string;
  type: DateType;
};

export type IsEditProps = {
  createdAt: string;
  updatedAt: string;
};
