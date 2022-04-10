import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "../Modal";
import { Button } from "@components/Buttons/Button";
import { Icon } from "@components/Icon";
import { DeleteModalProps } from "@components/Modal/@types";
import { useModalContext } from "@contexts/ModalContext";

export function DeleteModal(props: DeleteModalProps) {
  const { isOpen, title, description, onDelete } = props;
  const { t } = useTranslation("modal");
  const { closeModal } = useModalContext();

  const handleDelete = useCallback(() => {
    onDelete();
    closeModal();
  }, [closeModal, onDelete]);

  return (
    <Modal isOpen={isOpen}>
      <div className="modal">
        <div className="icon-wrapper bg-red-50">
          <Icon type="outline" name="trash" className="icon text-red-500" />
        </div>
        <div className="modal-title">{title}</div>
        <p className="modal-description">{description}</p>
        <div className="modal-buttons">
          <Button
            type="button"
            layout="cancel"
            onClick={closeModal}
            className="modal-button"
          >
            {t("buttons.cancel")}
          </Button>
          <Button
            type="button"
            onClick={handleDelete}
            className="modal-button bg-red-500 text-white"
          >
            {t("buttons.delete")}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
