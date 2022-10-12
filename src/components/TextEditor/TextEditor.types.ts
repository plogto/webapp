import type { ReactNode } from "react";
import type { UseFormSetValue } from "react-hook-form";
import type { ContentBlock, EditorState } from "draft-js";
import type { AddPostForm } from "@features/AddPost/AddPost.types";

export interface UseTextEditorProps {
  setValue: UseFormSetValue<AddPostForm>;
}
export interface TextEditorProps extends UseTextEditorProps {
  isReply?: boolean;
  className?: string;
  editorState: EditorState;
  placeholder?: string;
}

export interface DraftDecoratorComponent {
  children: ReactNode;
  offsetKey?: string;
}

export type FindWithRegex = (
  regex: RegExp,
  contentBlock: ContentBlock,
  callback: (start: number, end: number) => void,
) => void;
