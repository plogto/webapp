import type { ReactNode } from "react";
import { DateType } from "@enums";
import { EditorState } from "draft-js";

export interface ParsePostProps {
  content: string;
  hashtagComponent: ReactNode;
  mentionComponent: ReactNode;
}
export interface ContentStore {
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

export interface HandleCompleteSuggestionProps {
  editorState: EditorState;
  value: string;
}

export interface FormatCreditAmountOptions {
  sign?: boolean;
}
