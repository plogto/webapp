import classNames from "classnames";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import styles from "../../Modal.module.css";
import { Button } from "@components/Buttons/Button";
import { Icon } from "@components/Icon";
import { DeleteModalProps } from "@components/Modal/@types";
import { useModalContext } from "@contexts/ModalContext";

export function DeleteModal(props: DeleteModalProps) {
  const { title, description, onDelete } = props;
  const { t } = useTranslation("modal");
  const { closeModal } = useModalContext();

  const handleDelete = useCallback(() => {
    onDelete();
    closeModal();
  }, [closeModal, onDelete]);

  const iconWrapperClasses = classNames(styles.iconWrapper, "bg-red-50");
  const iconClasses = classNames(styles.icon, "bg-red-500");

  return (
    <div className={styles.modalWrapper}>
      <div className={iconWrapperClasses}>
        <Icon type="outline" name="exclamation" className={iconClasses} />
      </div>
      <div className={styles.modalTitle}>{title}</div>
      <p className={styles.modalDescription}>{description}</p>
      <div className={styles.modalButtons}>
        <Button onClick={closeModal} className={styles.modalCancelButton}>
          {t("buttons.cancel")}
        </Button>
        <Button onClick={handleDelete} className={styles.modalDeleteButton}>
          {t("buttons.delete")}
        </Button>
      </div>
    </div>
  );
}
