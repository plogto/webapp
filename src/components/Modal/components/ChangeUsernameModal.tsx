import type { ChangeUsernameModalProps } from "@components/Modal/Modal.types";
import { Modal } from "./Modal";

export function ChangeUsernameModal(props: ChangeUsernameModalProps) {
  const { isOpen = false, title, description, children, closeModal } = props;

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className="modal">
        <div className="modal-title">{title}</div>
        <p className="modal-description">{description}</p>
        <div className="w-full">{children}</div>
      </div>
    </Modal>
  );
}
