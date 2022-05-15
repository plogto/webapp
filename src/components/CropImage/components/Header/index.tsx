import { useTranslation } from "react-i18next";
import type { HeaderProps } from "@components/CropImage/@types";
import styles from "../../CropImage.module.css";

export function Header(props: HeaderProps) {
  const { onCancel, onApply } = props;
  const { t } = useTranslation("cropImage");
  return (
    <div className={styles.header}>
      <button type="button" onClick={onCancel}>
        {t("buttons.cancel")}
      </button>
      <span className={styles.title}>{t("texts.cropImage")}</span>
      <button type="button" className={styles.applyButton} onClick={onApply}>
        {t("buttons.apply")}
      </button>
    </div>
  );
}
