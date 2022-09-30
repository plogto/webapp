import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@components/Buttons/Button";
import { Icon } from "@components/Icon";
import { DeletionModalProps } from "@components/Modal/Modal.types";
import { useModalContext } from "@contexts/ModalContext";
import { Modal } from "./Modal";

export function DeletionModal(props: DeletionModalProps) {
  const { isOpen, title, description, onDelete } = props;
  const { t } = useTranslation("modal");
  const { closeModal } = useModalContext();

  const handleDelete = useCallback(() => {
    onDelete();
    closeModal();
  }, [closeModal, onDelete]);

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className="modal">
        <div className="icon-wrapper bg-danger-light">
          <Icon name="Trash" className="icon text-danger" />
        </div>
        <div className="modal-title">{title}</div>
        <p className="modal-description">{description}</p>
        <div className="modal-buttons">
          <Button
            type="button"
            onClick={handleDelete}
            className="modal-button bg-danger text-white"
          >
            {t("buttons.delete")}
          </Button>
          <Button
            type="button"
            layout="outline"
            onClick={closeModal}
            className="modal-button"
          >
            {t("buttons.cancel")}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
