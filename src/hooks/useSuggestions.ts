import { EditorState, Modifier, SelectionState } from "draft-js";
import type { HandleCompleteTagProps } from "./@types";

export function useSuggestions() {
  // TODO: rename function
  const getSearchText = (
    editorState: EditorState,
    selection: SelectionState,
  ) => {
    const anchorKey = selection.getAnchorKey();
    const anchorOffset = selection.getAnchorOffset() - 1;
    const currentContent = editorState.getCurrentContent();
    const currentBlock = currentContent.getBlockForKey(anchorKey);
    const blockText = currentBlock.getText();

    return getWordAt(blockText, anchorOffset);
  };

  const getWordAt = (string: string, position: number) => {
    const str = string;
    const pos = position >>> 0;

    // Search for the word's beginning and end.
    const left = str.slice(0, pos + 1).search(/\S+$/);
    const right = str.slice(pos).search(/\s/);

    // The last word in the string is a special case.
    if (right < 0) {
      return {
        word: str.slice(left),
        begin: left,
        end: str.length,
      };
    }

    // Return the word, using the located bounds to extract it from the string.
    return {
      word: str.slice(left, right + pos),
      begin: left,
      end: right + pos,
    };
  };

  const handleCompleteTag = (props: HandleCompleteTagProps) => {
    const { editorState, tagName } = props;
    const selection = editorState.getSelection();
    const { begin, end } = getSearchText(editorState, selection);

    const newSelectionState = selection.merge({
      anchorOffset: begin,
      focusOffset: end,
    });

    const contentState = editorState.getCurrentContent();

    const mentionReplacedContent = Modifier.replaceText(
      contentState,
      newSelectionState,
      tagName,
    );

    const newEditorState = EditorState.push(
      editorState,
      mentionReplacedContent,
      "apply-entity",
    );

    const forceSelection = selection.merge({
      anchorOffset: begin + tagName.length,
      focusOffset: begin + tagName.length,
    });

    return {
      newEditorState,
      forceSelection,
    };
  };

  return { handleCompleteTag };
}
