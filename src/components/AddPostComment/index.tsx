import TextareaAutosize from "react-textarea-autosize";
import { AddPostCommentProps } from "./@types";
import styles from "./AddPostComment.module.css";
import { Avatar } from "@components/Avatar";

export function AddPostComment(props: AddPostCommentProps) {
  const { onSend, comment, setComment } = props;

  return (
    <div className={styles.addCommentWrapper}>
      <div>
        <Avatar className={styles.avatar} />
      </div>
      <TextareaAutosize
        value={comment}
        onChange={e => setComment(e.target.value)}
        minRows={1}
      />
      <button onClick={onSend} className={styles.send}>
        Send
      </button>
    </div>
  );
}
