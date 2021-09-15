import { PageUrls } from "@/@enums/pages";
import LinkButton from "@/components/LinkButton";
import { useTranslation } from "react-i18next";
import styles from "./Landing.module.css";

export default function Landing() {
  const { t } = useTranslation("common");
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.logo}>PLOG</h1>
        <p className={styles.description}>
          Blog + Connections + Blah Blah Blah
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
