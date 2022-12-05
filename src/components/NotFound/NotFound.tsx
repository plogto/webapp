import { useTranslation } from "react-i18next";
import { Placeholder } from "@components/Placeholder";
import { PageUrls } from "@enums/pages";
import styles from "./NotFound.module.css";
import type { NotFoundProps } from "./NotFound.types";

export function NotFound(props: NotFoundProps) {
  const { title, description, icon, backButton } = props;
  const { t } = useTranslation("notFound");

  return (
    <div className={styles.notFound}>
      <Placeholder
        title={title || t("title")}
        icon={icon || "PlogFill"}
        description={description || t("description")}
        className={styles.placeholder}
        iconWrapperClassName={styles.iconWrapper}
        backButton={
          backButton || {
            href: PageUrls.HOME,
            title: t("backLink"),
          }
        }
      />
    </div>
  );
}
