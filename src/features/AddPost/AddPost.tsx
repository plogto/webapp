import { useMemo } from "react";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { CONTENT_MAX_LENGTH } from "@constants";
import { CropImageTypeKey, DateType } from "@enums";
import { AttachmentPreview } from "@components/AttachmentPreview";
import { Button } from "@components/Buttons/Button";
import { Card } from "@components/Card";
import { CropImage } from "@components/CropImage";
import { Icon } from "@components/Icon";
import { PageHeader } from "@components/PageHeader";
import { PostContent } from "@components/PostContent";
import { Suggestions } from "@components/Suggestions";
import { TextEditor } from "@components/TextEditor";
import { UserInfo } from "@components/UserInfo";
import { useAddPostContext } from "@contexts/AddPostContext";
import styles from "./AddPost.module.css";
import type { AddPostProps } from "./AddPost.types";
import { Counter } from "./components/Counter";
import { useAddPost } from "./hooks/useAddPost";

export function AddPost(props: AddPostProps) {
  const { isEditMode } = props;
  const { suggestions } = useAddPostContext();
  const {
    handleClickOnSuggestionItem,
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
  const { handleSubmit, watch, setValue } = formMethods;
  const { t } = useTranslation("addPost");

  const attachmentComponent = useMemo(
    () => (
      <AttachmentPreview
        showRemoveButton={!isEditMode}
        onClickRemoveButton={removeAttachmentPreview}
        image={attachmentPreview}
      />
    ),
    [attachmentPreview, isEditMode, removeAttachmentPreview],
  );

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
              id={parentPost.id}
              dateSize="large"
              size="large"
              dateType={DateType.LONG}
              content={parentPost.content}
              attachment={parentPost.attachment}
              likes={parentPost.likes}
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
              <Suggestions
                {...suggestions}
                handleClickOnSuggestionItem={handleClickOnSuggestionItem}
              />
              <TextEditor
                editorState={watch("content")}
                setValue={setValue}
                placeholder={t("placeholders.writeSomething")}
                isReply={!!parentPost?.id}
              />
              {attachmentComponent}
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
              <div className={styles.buttons}>
                <Counter
                  length={
                    watch("content").getCurrentContent().getPlainText()
                      .length || 0
                  }
                  maxLength={CONTENT_MAX_LENGTH}
                />

                <Button
                  className={styles.submit}
                  loading={isLoading}
                  disabled={
                    watch("content").getCurrentContent().getPlainText().length >
                      CONTENT_MAX_LENGTH ||
                    (!watch("content").getCurrentContent().getPlainText()
                      .length &&
                      !watch("attachment")?.length)
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
