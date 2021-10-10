import { useTranslation } from "react-i18next";
import styles from "./Landing.module.css";
import { LinkButton } from "@components/LinkButton";
import { PageUrls } from "@enums/pages";

export function Landing() {
  const { t } = useTranslation("pages");
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.logo}>PLOG</h1>
        <p className={styles.description}>
          {/* TODO: Remove this */}
          Plug + Blog + Blah Blah Blah
        </p>
        <div className={styles.authButtons}>
          <LinkButton
            href={PageUrls.REGISTER}
            className={styles.registerButton}
          >
            {t("register")}
          </LinkButton>
          <LinkButton href={PageUrls.LOGIN} className={styles.loginButton}>
            {t("login")}
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
