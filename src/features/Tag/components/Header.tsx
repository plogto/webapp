import { useTranslation } from "react-i18next";
import { Card } from "@components/Card";
import { Icon } from "@components/Icon";
import { PageHeader } from "@components/PageHeader";
import type { Tag } from "@t/tag";
import { formatCountTitle } from "@utils/formatter";
import styles from "../Tag.module.css";

interface Props {
  tag: Tag;
}

export function Header({ tag: { name, count } }: Props) {
  const { t } = useTranslation("common");

  return (
    <Card className={styles.wrapper}>
      <PageHeader title={t("tags")} />
      <div className={styles.header}>
        <span className={styles.icon}>
          <Icon name="Hashtag" />
        </span>
        <div>
          <div className={styles.tagName}>{name}</div>
          <div className={styles.tagCount}>
            {
              formatCountTitle({ singular: "post", plural: "posts", count })
                .text
            }
          </div>
        </div>
      </div>
    </Card>
  );
}
