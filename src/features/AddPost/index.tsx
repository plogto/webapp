import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import styles from "./AddPost.module.css";
import { AttachmentPreview } from "./components/AttachmentPreview";
import { Counter } from "./components/Counter";
import { useAddPost } from "./hooks/useAddPost";
import { Button } from "@components/Buttons/Button";
import { CropImage } from "@components/CropImage";
import { Icon } from "@components/Icon";
import { UserInfo } from "@components/UserInfo";
import { CONTENT_MAX_LENGTH } from "@config";
import { CropImageTypeKey } from "@enums";

export function AddPost() {
  const {
    user,
    formMethods,
    onSubmit,
    loading,
    attachmentPreview,
    setAttachmentPreview,
    removeAttachmentPreview,
    inputFileRef,
  } = useAddPost();
  const { register, handleSubmit, watch } = formMethods;
  const { back } = useRouter();
  const { t } = useTranslation("addPost");

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {user && (
        <>
          <div className={styles.header}>
            <Button onClick={back}>
              <Icon className={styles.icon} name="chevronLeft" />
            </Button>
            <UserInfo user={user} size="large" />
          </div>

          <AttachmentPreview
            onClickRemoveButton={removeAttachmentPreview}
            image={attachmentPreview}
          />
          <textarea
            {...register("content", {
              maxLength: {
                value: CONTENT_MAX_LENGTH,
                message: `Content is less that ${CONTENT_MAX_LENGTH} character`,
              },
            })}
            placeholder="Write something ..."
            className={styles.textarea}
            rows={10}
            name="content"
          />
          <div className={styles.footer}>
            {!attachmentPreview && (
              <Button
                onClick={() => inputFileRef.current?.click()}
                className={styles.attachmentButton}
              >
                <Icon name="photo" className={styles.icon} />
              </Button>
            )}
            <div className={styles.buttonContainer}>
              <Counter
                length={watch("content")?.length || 0}
                maxLength={CONTENT_MAX_LENGTH}
              />

              <Button
                className={styles.submit}
                loading={loading}
                disabled={!watch("content") && !attachmentPreview}
                type="submit"
              >
                {t("buttons.addPost")}
              </Button>
            </div>
          </div>
          <CropImage
            type={CropImageTypeKey.POST}
            inputFileRef={inputFileRef}
            setImagePreview={setAttachmentPreview}
          />
        </>
      )}
    </form>
  );
}
