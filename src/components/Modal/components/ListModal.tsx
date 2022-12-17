import { MouseEvent, useCallback } from "react";
import classNames from "classnames";
import { ButtonLayout } from "@enums";
import { Button } from "@components/Buttons/Button";
import { useModalContext } from "@contexts/ModalContext";
import type { ListModalProps } from "../Modal.types";
import { Modal } from "./Modal";

export function ListModal(props: ListModalProps) {
  const { isOpen = false, title, children, closeButton } = props;
  const { closeModal } = useModalContext();

  const handleClose = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      closeModal();
    },
    [closeModal],
  );

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className="modal">
        <div className="modal-title">{title}</div>
        {children}
        <div className="modal-buttons">
          <Button
            type="button"
            layout={ButtonLayout.FILL}
            onClick={handleClose}
            className={classNames("modal-button")}
          >
            {closeButton}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
