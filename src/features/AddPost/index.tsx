import { useTranslation } from "react-i18next";
import TextareaAutosize from "react-textarea-autosize";
import styles from "./AddPost.module.css";
import { AttachmentPreview } from "./components/AttachmentPreview";
import { Counter } from "./components/Counter";
import { useAddPost } from "./hooks/useAddPost";
import { Button } from "@components/Buttons/Button";
import { CropImage } from "@components/CropImage";
import { Icon } from "@components/Icon";
import { PageHeader } from "@components/PageHeader";
import { PostContent } from "@components/PostContent";
import { UserInfo } from "@components/UserInfo";
import { CONTENT_MAX_LENGTH } from "@constants";
import { CropImageTypeKey, DateType } from "@enums";

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
    parentPost,
  } = useAddPost();
  const { register, handleSubmit, watch } = formMethods;
  const { t } = useTranslation("addPost");

  return (
    <div className={styles.addPost}>
      <PageHeader
        title={parentPost.data ? t("texts.replyPost") : t("texts.newPost")}
      />
      {parentPost.data && (
        <div className={styles.parentPost}>
          <div className={styles.header}>
            <UserInfo size="normal" user={parentPost.data.getPostByUrl.user} />
          </div>
          <PostContent
            dateSize="large"
            dateType={DateType.LONG}
            content={parentPost.data.getPostByUrl.content}
            attachment={parentPost.data.getPostByUrl.attachment}
            createdAt={parentPost.data.getPostByUrl.createdAt}
            updatedAt={parentPost.data.getPostByUrl.updatedAt}
          />
        </div>
      )}
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {user && (
          <>
            <div className={styles.header}>
              <UserInfo
                user={user}
                size={!parentPost.data ? "normal" : "small"}
              />
            </div>

            <div className={styles.main}>
              <TextareaAutosize
                {...register("content", {
                  maxLength: {
                    value: CONTENT_MAX_LENGTH,
                    message: `Content is less that ${CONTENT_MAX_LENGTH} character`,
                  },
                })}
                placeholder="Write something ..."
                className={styles.textarea}
                name="content"
              />
              <AttachmentPreview
                onClickRemoveButton={removeAttachmentPreview}
                image={attachmentPreview}
              />
            </div>
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
                  {parentPost.data ? t("buttons.reply") : t("buttons.addPost")}
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
    </div>
  );
}
