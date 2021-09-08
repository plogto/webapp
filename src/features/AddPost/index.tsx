import Button from "@/components/Button";
import { CONTENT_MAX_LENGTH } from "@/config";
import { useTranslation } from "react-i18next";
import styles from "./AddPost.module.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import { useAddPost } from "./hooks/useAddPost";

export default function AddPost() {
  const { user, formMethods, submit, loading } = useAddPost();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = formMethods;
  const { t } = useTranslation("addPost");

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(submit)}>
        {user && (
          <>
            <Header {...user} />
            <textarea
              {...register("content", {
                required: {
                  value: true,
                  message: "Required",
                },
                maxLength: {
                  value: CONTENT_MAX_LENGTH,
                  message: "Content is less that 500 character",
                },
              })}
              className={styles.textarea}
              rows={10}
              name="content"
            />
            <div className={styles.footer}>
              <Counter
                length={watch("content")?.length || 0}
                maxLength={CONTENT_MAX_LENGTH}
              />
              <Button
                className={styles.submit}
                loading={loading}
                disabled={!!errors.content?.message}
                type="submit">
                {t("buttons.addPost")}
              </Button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
