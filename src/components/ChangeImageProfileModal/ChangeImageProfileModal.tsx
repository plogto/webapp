import { useTranslation } from "react-i18next";
import { ButtonLayout } from "@enums";
import { Button } from "@components/Buttons/Button";
import { Icon } from "@components/Icon";
import { Modal } from "@components/Modal";
import type { ChangeImageProfileProps } from "./ChangeImageProfile.types";
import styles from "./ChangeImageProfileModal.module.css";

// TODO: move to Modal/components
export function ChangeImageProfileModal(props: ChangeImageProfileProps) {
  const {
    title,
    isOpen,
    closeModal,
    onClickInputFile,
    removeImage,
    isShowRemoveButton = true,
  } = props;
  const { t } = useTranslation("settings");

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className="modal">
        <div className="modal-title">{title}</div>
        <div className="icon-wrapper bg-background">
          <Icon name="Photo" className="icon text-foreground-medium" />
        </div>
        <div className={styles.modalButtons}>
          <Button
            layout={ButtonLayout.FILL}
            className="modal-button"
            onClick={onClickInputFile}
          >
            {t("buttons.uploadPhoto")}
          </Button>
          {isShowRemoveButton && (
            <Button
              layout={ButtonLayout.DANGER}
              className="modal-button"
              onClick={removeImage}
            >
              {t("buttons.removePhoto")}
            </Button>
          )}
          <Button
            layout={ButtonLayout.NORMAL}
            className="modal-button"
            onClick={closeModal}
          >
            {t("buttons.cancel")}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
