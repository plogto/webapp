import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { useRouter } from "next/router";
import { Button } from "@components/Buttons/Button";
import { Icon } from "@components/Icon";
import { Modal } from "@components/Modal";
import { useModalContext } from "@contexts/ModalContext";
import { PageUrls } from "@enums/pages";
import type { LogoutButtonProps } from "@features/Settings/Settings.types";

// TODO: split button and modal and move modal part to Modal/components
export function LogoutButton(props: LogoutButtonProps) {
  const { push } = useRouter();
  const { className } = props;
  const { t } = useTranslation("logout");
  const { closeModal, openModal, isOpen } = useModalContext();

  const handleLogout = useCallback(() => {
    push(PageUrls.LOGOUT);
    closeModal();
  }, [closeModal, push]);

  return (
    <>
      <Modal isOpen={isOpen}>
        <div className="modal">
          <div className="icon-wrapper bg-background-medium">
            <Icon name="Exclamation" className="icon text-foreground" />
          </div>
          <div className="modal-title">{t("texts.title")}</div>
          <p className="modal-description">{t("texts.description")}</p>
          <div className="modal-buttons">
            <Button
              type="button"
              layout="apply"
              onClick={handleLogout}
              className="modal-button"
            >
              {t("buttons.logout")}
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
      <Button onClick={openModal} className={classNames(className)}>
        {t("texts.logout")}
      </Button>
    </>
  );
}
