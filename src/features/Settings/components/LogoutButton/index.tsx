import classNames from "classnames";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@components/Buttons/Button";
import { Icon } from "@components/Icon";
import { Modal } from "@components/Modal";
import styles from "@components/Modal/Modal.module.css";
import { useModalContext } from "@contexts/ModalContext";
import { PageUrls } from "@enums/pages";
import type { LogoutButtonProps } from "@features/Settings/@types";

export function LogoutButton(props: LogoutButtonProps) {
  const { push } = useRouter();
  const { className } = props;

  const { closeModal, openModal, isOpen } = useModalContext();

  const handleLogout = useCallback(() => {
    push(PageUrls.LOGOUT);
    closeModal();
  }, [closeModal, push]);

  const iconWrapperClasses = classNames(styles.iconWrapper, "bg-red-50");
  const iconClasses = classNames(styles.icon, "text-red-500");

  const { t } = useTranslation("logout");

  return (
    <>
      <Modal isOpen={isOpen}>
        <div className={styles.modalWrapper}>
          <div className={iconWrapperClasses}>
            <Icon type="outline" name="exclamation" className={iconClasses} />
          </div>
          <div className={styles.modalTitle}>{t("texts.title")}</div>
          <p className={styles.modalDescription}>{t("texts.description")}</p>
          <div className={styles.modalButtons}>
            <Button onClick={closeModal} className={styles.modalCancelButton}>
              {t("buttons.cancel")}
            </Button>
            <Button onClick={handleLogout} className={styles.modalDeleteButton}>
              {t("buttons.logout")}
            </Button>
          </div>
        </div>
      </Modal>
      <Button onClick={openModal} className={classNames(className)}>
        {t("texts.logout")}
      </Button>
    </>
  );
}
