import { useTranslation } from "react-i18next";
import styles from "./Landing.module.css";
import { LinkButton } from "@components/Buttons/LinkButton";
import { Icon } from "@components/Icon";
import { PageUrls } from "@enums/pages";

export function Landing() {
  const { t } = useTranslation(["pages", "common"]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <Icon name="plog" className={styles.logo} />
          <h1 className={styles.logoTitle}>{t("common:logoName")}</h1>
        </div>
        <p className={styles.description}>
          {/* TODO: Remove this */}
          Plug + Blog + Blah Blah Blah
        </p>
        <div className={styles.authButtons}>
          <LinkButton
            href={PageUrls.REGISTER}
            className={styles.registerButton}
          >
            {t("pages:register")}
          </LinkButton>
          <LinkButton
            layout="outline"
            href={PageUrls.LOGIN}
            className={styles.loginButton}
          >
            {t("pages:login")}
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
