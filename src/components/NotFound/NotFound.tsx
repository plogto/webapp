import { useTranslation } from "react-i18next";
import { LinkButton } from "@components/Buttons/LinkButton";
import { Icon } from "@components/Icon";
import { PageUrls } from "@enums/pages";
import styles from "./NotFound.module.css";
import type { NotFoundProps } from "./NotFound.types";

export function NotFound(props: NotFoundProps) {
  const { t } = useTranslation("notFound");

  const {
    title,
    description,
    icon,
    backButton = {
      href: PageUrls.HOME,
      title: t("backLink"),
    },
  } = props;

  return (
    <div className={styles.notFound}>
      <div className={styles.placeholder}>
        <div className={styles.iconWrapper}>
          {<Icon name={icon || "PlogFill"} className={styles.icon} />}
        </div>
        <div className={styles.title}>{title || t("title")}</div>
        <div className={styles.description}>
          {description || t("description")}
        </div>
        {backButton && (
          <LinkButton href={backButton.href} className={styles.backButton}>
            {backButton?.title}
          </LinkButton>
        )}
      </div>
    </div>
  );
}
