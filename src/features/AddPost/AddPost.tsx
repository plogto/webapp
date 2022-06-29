import { isMobile } from "react-device-detect";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import TextareaAutosize from "react-textarea-autosize";
import classNames from "classnames";
import { CONTENT_MAX_LENGTH } from "@constants";
import { CropImageTypeKey, DateType } from "@enums";
import { Button } from "@components/Buttons/Button";
import { Card } from "@components/Card";
import { CropImage } from "@components/CropImage";
import { Icon } from "@components/Icon";
import { PageHeader } from "@components/PageHeader";
import { PostContent } from "@components/PostContent";
import { UserInfo } from "@components/UserInfo";
import styles from "./AddPost.module.css";
import type { AddPostProps } from "./AddPost.types";
import { AttachmentPreview } from "./components/AttachmentPreview";
import { Counter } from "./components/Counter";
import { useAddPost } from "./hooks/useAddPost";

export function AddPost(props: AddPostProps) {
  const { isEditMode } = props;
  const {
    buttonTitle,
    isLoading,
    user,
    formMethods,
    onSubmit,
    attachmentPreview,
    setAttachmentPreview,
    removeAttachmentPreview,
    inputFileRef,
    parentPost,
  } = useAddPost({ isEditMode });
  const { control, handleSubmit, watch } = formMethods;
  const { t } = useTranslation("addPost");

  return (
    <>
      {isMobile && (
        <PageHeader
          className={styles.mobileHeader}
          title={parentPost ? t("texts.replyPost") : t("texts.newPost")}
        />
      )}
      <Card shadow={!isMobile} rounded={!isMobile} className={styles.addPost}>
        {parentPost && (
          <div className={styles.parentPost}>
            <div className={styles.header}>
              <UserInfo size="normal" user={parentPost.user} />
            </div>
            <PostContent
              dateSize="large"
              size="large"
              dateType={DateType.LONG}
              content={parentPost.content}
              attachment={parentPost.attachment}
              createdAt={parentPost.createdAt}
              updatedAt={parentPost.updatedAt}
            />
          </div>
        )}
        {user && (
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.header}>
              <UserInfo user={user} size={!parentPost ? "normal" : "small"} />
            </div>

            <div className={styles.main}>
              <Controller
                name="content"
                control={control}
                rules={{
                  maxLength: {
                    value: CONTENT_MAX_LENGTH,
                    message: `Content should be less than ${CONTENT_MAX_LENGTH} character`,
                  },
                }}
                render={({ field }) => (
                  <TextareaAutosize
                    {...field}
                    placeholder="Write something ..."
                    className={classNames(
                      styles.textarea,
                      parentPost?.id && styles.reply,
                    )}
                  />
                )}
              />

              <AttachmentPreview
                showRemoveButton={!isEditMode}
                onClickRemoveButton={removeAttachmentPreview}
                image={attachmentPreview}
              />
            </div>

            <div className={styles.footer}>
              {!attachmentPreview && !isEditMode && (
                <Button
                  onClick={() => inputFileRef.current?.click()}
                  className={styles.attachmentButton}
                >
                  <Icon name="Photo" className={styles.icon} />
                </Button>
              )}
              <div className={styles.buttonContainer}>
                <Counter
                  length={watch("content")?.length || 0}
                  maxLength={CONTENT_MAX_LENGTH}
                />

                <Button
                  className={styles.submit}
                  loading={isLoading}
                  disabled={
                    !watch("content")?.length && !watch("attachment")?.length
                  }
                  type="submit"
                >
                  {buttonTitle}
                </Button>
              </div>
            </div>

            <CropImage
              type={CropImageTypeKey.POST}
              inputFileRef={inputFileRef}
              setImagePreview={setAttachmentPreview}
            />
          </form>
        )}
      </Card>
    </>
  );
}
