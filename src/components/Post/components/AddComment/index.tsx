import TextareaAutosize from "react-textarea-autosize";
import styles from "../../Post.module.css";
import { Avatar } from "@components/Avatar";
import { AddCommentProps } from "@components/Post/@types";

export function AddComment(props: AddCommentProps) {
  const { onSubmit, formMethods } = props;
  const { handleSubmit, register } = formMethods;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.addCommentWrapper}
    >
      <div>
        <Avatar className={styles.addCommentAvatar} />
      </div>
      <TextareaAutosize
        {...register("content", { required: true })}
        minRows={1}
      />
      <button type="submit" className={styles.send}>
        Send
      </button>
    </form>
  );
}
