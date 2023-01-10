import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { useRouter } from "next/router";
import { ModalColor } from "@enums";
import { Button } from "@components/Buttons/Button";
import { Icon } from "@components/Icon";
import { ConfirmationModal } from "@components/Modal";
import { useModalContext } from "@contexts/ModalContext";
import { PageUrls } from "@enums/pages";
import type { LogoutButtonProps } from "@features/Settings/Settings.types";
import styles from "../Settings.module.css";

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
      <ConfirmationModal
        icon="Exclamation"
        color={ModalColor.YELLOW}
        onSubmit={handleLogout}
        isOpen={isOpen}
        title={t("texts.title")}
        description={t("texts.description")}
        submitButton={t("buttons.logout")}
      />
      <Button onClick={openModal} className={classNames(className)}>
        <Icon className={styles.icon} name="Logout" />
        <span>{t("texts.logout")}</span>
      </Button>
    </>
  );
}
