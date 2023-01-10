import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { AnimationPattern, ButtonLayout } from "@enums";
import { Button } from "@components/Buttons/Button";
import { Icon } from "@components/Icon";
import { Modal } from "@components/Modal";
import { prepareAnimationClasses } from "@utils/animation";
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

  const animationClasses = prepareAnimationClasses(AnimationPattern.ZOOM_IN);

  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
      <div className="modal">
        <div className={classNames("icon-wrapper", animationClasses)}>
          <Icon
            name="Photo"
            className={classNames("icon text-foreground", animationClasses)}
          />
        </div>
        <div className="modal-title">{title}</div>
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
