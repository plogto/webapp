import classNames from "classnames";
import Editor from "@draft-js-plugins/editor";
import styles from "./TextEditor.module.css";
import type { TextEditorProps } from "./TextEditor.types";
import { useTextEditor } from "./hooks/useTextEditor";

export function TextEditor(props: TextEditorProps) {
  const { isReply, editorState, setValue, placeholder } = props;
  const { handleChange, editorRef, focusOnEditor, decorators, plugins } =
    useTextEditor({
      setValue,
    });

  const textEditorClasses = classNames(
    styles.textEditor,
    isReply && styles.isReply,
  );

  return (
    <div className={textEditorClasses} onClick={focusOnEditor}>
      <Editor
        decorators={decorators}
        editorState={editorState}
        onChange={handleChange}
        plugins={plugins}
        placeholder={placeholder}
        ref={editorRef}
      />
    </div>
  );
}
