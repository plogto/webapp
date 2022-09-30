import { useTranslation } from "react-i18next";
import styles from "../Credits.module.css";
import type { InvitationCodeProps } from "../Credits.types";

export function InvitationCode(props: InvitationCodeProps) {
  const { invitationCode } = props;
  const { t } = useTranslation("credits");
  return (
    <div className={styles.invitationCodeWrapper}>
      <div className={styles.title}>{t("texts.invitationCode")}</div>
      <div className={styles.invitationCode}>
        {invitationCode?.toUpperCase()}
      </div>
    </div>
  );
}
