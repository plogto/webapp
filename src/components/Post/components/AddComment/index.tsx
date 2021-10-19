import { useTranslation } from "react-i18next";
import TextareaAutosize from "react-textarea-autosize";
import styles from "../../Post.module.css";
import { Avatar } from "@components/Avatar";
import { AddCommentProps } from "@components/Post/@types";

export function AddComment(props: AddCommentProps) {
  const { onSubmit, formMethods, parent, removeReply } = props;
  const { handleSubmit, register } = formMethods;
  const { t } = useTranslation("comment");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.addCommentWrapper}
    >
      {!!parent && (
        <div onClick={() => removeReply()} className={styles.replyWrapper}>
          <span>{t("replyTo")}</span>
          <div className={styles.reply}>
            <div>
              <Avatar className={styles.replyAvatar} />
            </div>
            <span className={styles.replyUsername}>
              {parent?.user.fullname}
            </span>
          </div>
        </div>
      )}
      <div className={styles.addCommentForm}>
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
      </div>
    </form>
  );
}
