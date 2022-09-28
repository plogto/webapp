import { useTranslation } from "react-i18next";
import { CropImageTypeKey } from "@enums";
import { AttachmentPreview } from "@components/AttachmentPreview";
import { Button } from "@components/Buttons/Button";
import { CropImage } from "@components/CropImage";
import { Icon } from "@components/Icon";
import { Input } from "@components/Input";
import { Textarea } from "@components/Textarea";
import styles from "./AddTicket.module.css";
import { AddTicketProps } from "./AddTicket.types";
import { useAddTicket } from "./useAddTicket";

export function AddTicket(props: AddTicketProps) {
  const { isShowSubject, submitButtonTitle, onCloseButton, ticket } = props;
  const {
    formMethods,
    onSubmit,
    attachmentPreview,
    setAttachmentPreview,
    inputFileRef,
    removeAttachmentPreview,
    loading,
  } = useAddTicket({ isShowSubject, ticket, onCloseButton });
  const {
    handleSubmit,
    register,
    formState: { isValid, errors },
  } = formMethods;
  const { t } = useTranslation("support");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.addTicket}>
      <div className={styles.main}>
        <AttachmentPreview
          showRemoveButton
          onClickRemoveButton={removeAttachmentPreview}
          image={attachmentPreview}
        />
        <div className="flex flex-col space-y-4 w-full">
          {isShowSubject && (
            <Input
              autoComplete="off"
              type="text"
              name="subject"
              placeholder={t("labels.subject")}
              label={t("labels.subject")}
              register={register("subject", {
                required: true,
              })}
              messageType={errors.subject && "error"}
              message={errors.subject?.message}
            />
          )}
          <Textarea
            name="message"
            placeholder={t("labels.message")}
            label={t("labels.message")}
            register={register("message", { required: true })}
            messageType={errors.message && "error"}
            message={errors.message?.message}
          />
        </div>
      </div>
      <div className={styles.footer}>
        {!attachmentPreview && (
          <Button
            onClick={() => inputFileRef.current?.click()}
            className={styles.attachmentButton}
          >
            <Icon name="Photo" className={styles.icon} />
          </Button>
        )}
        <div className={styles.buttons}>
          <Button
            className={styles.button}
            layout="outline"
            type="button"
            onClick={onCloseButton}
          >
            {t("buttons.cancel")}
          </Button>
          <Button
            className={styles.button}
            layout="apply"
            type="submit"
            loading={loading}
            disabled={!isValid || loading}
          >
            {submitButtonTitle}
          </Button>
        </div>
      </div>
      <CropImage
        type={CropImageTypeKey.POST}
        inputFileRef={inputFileRef}
        setImagePreview={setAttachmentPreview}
      />
    </form>
  );
}
