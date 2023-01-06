import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Icon } from "@components/Icon";
import { PageUrls } from "@enums/pages";
import styles from "./Logo.module.css";
import type { LogoProps } from "./Logo.types";

export function Logo(props: LogoProps) {
  const { isClickable = true, showText = true } = props;
  const { t } = useTranslation("common");

  const content = (
    <>
      <Icon name="PlogFill" className={styles.logo} />
      {showText && <span>{t("logoName")}</span>}
    </>
  );

  return isClickable ? (
    <Link href={PageUrls.HOME} legacyBehavior>
      <a className={styles.logoWrapper}>{content}</a>
    </Link>
  ) : (
    <div className={styles.logoWrapper}>{content}</div>
  );
}
