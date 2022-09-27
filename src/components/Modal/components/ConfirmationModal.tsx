import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Button } from "@components/Buttons/Button";
import { Icon } from "@components/Icon";
import type { ConfirmationModalProps } from "@components/Modal/Modal.types";
import { useModalContext } from "@contexts/ModalContext";
import { Modal } from "./Modal";

export function ConfirmationModal(props: ConfirmationModalProps) {
  const { isOpen, title, description, icon, onSubmit, type, submitTitle } =
    props;
  const { t } = useTranslation("modal");
  const { closeModal } = useModalContext();

  const handleSubmit = useCallback(() => {
    onSubmit();
    closeModal();
  }, [closeModal, onSubmit]);

  const typeClassName = type?.toLowerCase() || "normal";

  return (
    <Modal isOpen={!!isOpen}>
      <div className="modal">
        <div className={classNames("icon-wrapper", typeClassName)}>
          <Icon name={icon} className={classNames("icon", typeClassName)} />
        </div>
        <div className="modal-title">{title}</div>
        <p className="modal-description">{description}</p>
        <div className="modal-buttons">
          <Button
            type="button"
            onClick={handleSubmit}
            className={classNames("modal-button text-white", typeClassName)}
          >
            {submitTitle}
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
