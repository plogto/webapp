import type { ReactNode } from "react";
import { DateType } from "@enums";
import { EditorState } from "draft-js";

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

export interface HandleCompleteTagProps {
  editorState: EditorState;
  tagName: string;
}
