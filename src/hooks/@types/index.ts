import type { ReactNode } from "react";
import { DateType, ImageProfileKey } from "@enums";
import type { EditorState } from "draft-js";

export interface ParsePostProps {
  content: string;
  hashtagComponent: (value: string) => JSX.Element;
  mentionComponent: (value: string) => JSX.Element;
  linkComponent: (value: string) => JSX.Element;
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
  key: ImageProfileKey;
}

export interface HandleCompleteSuggestionProps {
  editorState: EditorState;
  value: string;
}

export interface FormatCreditAmountOptions {
  sign?: boolean;
}

export interface UseUserProfileProps {
  username?: string;
}
