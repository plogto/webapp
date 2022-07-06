import type { UseFormSetValue } from "react-hook-form";
import { EditorState } from "draft-js";
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
