import { useTranslation } from "react-i18next";
import styles from "../../Settings.module.css";
import { Button } from "@components/Buttons/Button";
import { Icon } from "@components/Icon";
import { Modal } from "@components/Modal";
import type { ChangeImageProfileProps } from "@features/Settings/@types";

export function ChangeImageProfileModal(props: ChangeImageProfileProps) {
  const { title, isOpen, closeModal, onClickInputFile, removeImage } = props;
  const { t } = useTranslation("settings");

  return (
    <Modal isOpen={isOpen}>
      <div className="modal">
        <div className="modal-title">{title}</div>
        <div className="icon-wrapper bg-gray-50">
          <Icon type="outline" name="photo" className="icon text-gray-500" />
        </div>
        <div className={styles.modalButtons}>
          <Button
            layout="apply"
            className="modal-button"
            onClick={onClickInputFile}
          >
            {t("buttons.uploadPhoto")}
          </Button>
          <Button
            layout="remove"
            className="modal-button"
            onClick={removeImage}
          >
            {t("buttons.removePhoto")}
          </Button>
          <Button layout="cancel" className="modal-button" onClick={closeModal}>
            {t("buttons.cancel")}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
