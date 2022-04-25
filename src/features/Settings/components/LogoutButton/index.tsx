import classNames from "classnames";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@components/Buttons/Button";
import { Icon } from "@components/Icon";
import { Modal } from "@components/Modal";
import { useModalContext } from "@contexts/ModalContext";
import { PageUrls } from "@enums/pages";
import type { LogoutButtonProps } from "@features/Settings/@types";

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
            <Icon
              type="outline"
              name="exclamation"
              className="icon text-foreground"
            />
          </div>
          <div className="modal-title">{t("texts.title")}</div>
          <p className="modal-description">{t("texts.description")}</p>
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
              layout="apply"
              onClick={handleLogout}
              className="modal-button"
            >
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
