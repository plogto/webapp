import { useTranslation } from "react-i18next";
import styles from "../../CropImage.module.css";
import type { HeaderProps } from "@components/CropImage/@types";

export function Header(props: HeaderProps) {
  const { onCancel, onApply } = props;
  const { t } = useTranslation("cropImage");
  return (
    <div className={styles.header}>
      <button onClick={onCancel}>{t("buttons.cancel")}</button>
      <span className={styles.title}>{t("texts.cropImage")}</span>
      <button className={styles.applyButton} onClick={onApply}>
        {t("buttons.apply")}
      </button>
    </div>
  );
}
