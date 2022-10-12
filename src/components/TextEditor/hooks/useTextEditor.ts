import { useCallback, useRef } from "react";
import { HASHTAG_PATTERN, MENTION_PATTERN } from "@constants";
import { EditorState, DraftDecorator } from "draft-js";
import { useAddPostContext } from "@contexts/AddPostContext";
import PluginEditor from "@draft-js-plugins/editor/lib/Editor";
import createLinkifyPlugin from "@draft-js-plugins/linkify";
import type { FindWithRegex, UseTextEditorProps } from "../TextEditor.types";
import { DecoratorComponent } from "../components/DecoratorComponent";
import { useSuggestTags } from "./useSuggestTags";
import { useSuggestUsers } from "./useSuggestUsers";

export function useTextEditor(props: UseTextEditorProps) {
  const { setValue } = props;
  const { searchTags } = useSuggestTags();
  const { searchUsers } = useSuggestUsers();
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
      } else if (expression.match(MENTION_PATTERN)) {
        searchUsers({ variables: { expression: expression.substring(1) } });
      } else {
        emptySuggestions();
      }
    },
    [emptySuggestions, searchTags, searchUsers],
  );

  const findWithRegex: FindWithRegex = (regex, contentBlock, callback) => {
    const text = contentBlock.getText();
    let matchArr, start;
    while ((matchArr = regex.exec(text)) !== null) {
      start = matchArr.index;
      callback(start, start + matchArr[0].length);
    }
  };

  const linkifyPlugin = createLinkifyPlugin({
    component: DecoratorComponent,
  });

  const plugins = [linkifyPlugin];

  const decorators: DraftDecorator[] = [
    {
      strategy: (contentBlock, callback) => {
        findWithRegex(MENTION_PATTERN, contentBlock, callback);
      },
      component: DecoratorComponent,
    },
    {
      strategy: (contentBlock, callback) => {
        findWithRegex(HASHTAG_PATTERN, contentBlock, callback);
      },
      component: DecoratorComponent,
    },
  ];

  const focusOnEditor = () => {
    editorRef.current?.focus();
  };

  const handleChange = (editorState: EditorState) => {
    setValue("content", editorState);
    handleCursorPosition(editorState);
  };

  return {
    decorators,
    handleCursorPosition,
    handleChange,
    editorRef,
    focusOnEditor,
    plugins,
  };
}
