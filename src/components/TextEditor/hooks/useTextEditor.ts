import { useCallback, useRef } from "react";
import { HASHTAG_PATTERN } from "@constants";
import { EditorState } from "draft-js";
import { useAddPostContext } from "@contexts/AddPostContext";
import PluginEditor from "@draft-js-plugins/editor/lib/Editor";
import type { UseTextEditorProps } from "../TextEditor.types";
import { useSuggestTags } from "./useSuggestTags";

export function useTextEditor(props: UseTextEditorProps) {
  const { setValue } = props;
  const { searchTags } = useSuggestTags();
  const { emptySuggestions } = useAddPostContext();
  const editorRef = useRef<PluginEditor>(null);

  const handleCursorPosition = useCallback(
    (editorState: EditorState) => {
      const selectionState = editorState.getSelection();
      const anchorKey = selectionState.getAnchorKey();
      const currentContent = editorState.getCurrentContent();
      const currentContentBlock = currentContent.getBlockForKey(anchorKey);
      const start = selectionState.getStartOffset();
      const text = currentContentBlock.getText().slice(0, start).split(" ");
      const expression = text[text.length - 1];
      if (expression.match(HASHTAG_PATTERN)) {
        searchTags({ variables: { expression: expression.substring(1) } });
      } else {
        emptySuggestions();
      }
    },
    [emptySuggestions, searchTags],
  );

  const focusOnEditor = () => {
    editorRef.current?.focus();
  };

  const handleChange = (editorState: EditorState) => {
    setValue("content", editorState);
    handleCursorPosition(editorState);
  };

  return { handleCursorPosition, handleChange, editorRef, focusOnEditor };
}
