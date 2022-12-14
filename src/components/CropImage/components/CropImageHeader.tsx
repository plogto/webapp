import { useTranslation } from "react-i18next";
import styles from "../CropImage.module.css";
import type { CropImageHeaderProps } from "../CropImage.types";

export function CropImageHeader(props: CropImageHeaderProps) {
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
