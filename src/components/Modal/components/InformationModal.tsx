import { useCallback } from "react";
import classNames from "classnames";
import { AnimationPattern, ModalColor } from "@enums";
import { Button } from "@components/Buttons/Button";
import { Icon } from "@components/Icon";
import type { InformationModalProps } from "@components/Modal/Modal.types";
import { useModalContext } from "@contexts/ModalContext";
import { prepareAnimationClasses } from "@utils/animation";
import { Modal } from "./Modal";

export function InformationModal(props: InformationModalProps) {
  const {
    isOpen = false,
    title,
    description,
    content,
    color = ModalColor.NORMAL,
    icon,
    onSubmit,
    submitButton,
  } = props;
  const { closeModal } = useModalContext();

  const handleSubmit = useCallback(() => {
    onSubmit();
    closeModal();
  }, [closeModal, onSubmit]);

  const colorClassName = color.toLowerCase();
  const motion = prepareAnimationClasses(AnimationPattern.ZOOM_IN);

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className="modal">
        <div className={classNames("icon-wrapper", motion)}>
          <Icon name={icon} className={classNames("icon", colorClassName)} />
        </div>
        <div className="modal-title">{title}</div>
        <p className="modal-description">{description}</p>
        {content}
        <div className="modal-buttons">
          <Button
            type="button"
            onClick={handleSubmit}
            className={classNames("modal-button", colorClassName)}
          >
            {submitButton}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
