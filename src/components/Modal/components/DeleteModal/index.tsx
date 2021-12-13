import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import styles from "../../Modal.module.css";
import { Button } from "@components/Buttons/Button";
import { Icon } from "@components/Icon";
import { DeleteModalProps } from "@components/Modal/@types";
import { useModalContext } from "@contexts/ModalContext";

export function DeleteModal(props: DeleteModalProps) {
  const { onDelete } = props;
  const { t } = useTranslation("comment");
  const { closeModal } = useModalContext();

  const handleDelete = useCallback(() => {
    onDelete();
    closeModal();
  }, [onDelete]);

  return (
    <div className={styles.modalWrapper}>
      <div className={`${styles.iconWrapper} bg-red-50`}>
        <Icon
          type="outline"
          name="exclamation"
          className={`${styles.icon} text-red-500`}
        />
      </div>
      <div className={styles.modalTitle}>{t("modals.delete.title")}</div>
      <p className={styles.modalDescription}>
        {t("modals.delete.description")}
      </p>
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
