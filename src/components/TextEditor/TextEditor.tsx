import classNames from "classnames";
import Editor from "@draft-js-plugins/editor";
import createHashtagPlugin from "@draft-js-plugins/hashtag";
import hashtagStyles from "./Hashtag.module.css";
import styles from "./TextEditor.module.css";
import type { TextEditorProps } from "./TextEditor.types";
import { useTextEditor } from "./hooks/useTextEditor";

const hashtagPlugin = createHashtagPlugin({ theme: hashtagStyles });
const plugins = [hashtagPlugin];

export function TextEditor(props: TextEditorProps) {
  const { isReply, editorState, setValue, placeholder } = props;
  const { handleChange, editorRef, focusOnEditor } = useTextEditor({
    setValue,
  });

  const textEditorClasses = classNames(
    styles.textEditor,
    isReply && styles.isReply,
  );

  return (
    <div className={textEditorClasses} onClick={focusOnEditor}>
      <Editor
        editorState={editorState}
        onChange={handleChange}
        plugins={plugins}
        placeholder={placeholder}
        ref={editorRef}
      />
    </div>
  );
}
