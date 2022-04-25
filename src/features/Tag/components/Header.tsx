import { useTranslation } from "react-i18next";
import styles from "../Tag.module.css";
import { Card } from "@components/Card";
import { Icon } from "@components/Icon";
import { PageHeader } from "@components/PageHeader";
import { formatCountTitle } from "@utils/formatter";
import type { Tag } from "@t/tag";

type Props = {
  tag: Tag;
};

export function Header({ tag: { name, count } }: Props) {
  const { t } = useTranslation("common");

  return (
    <Card className={styles.wrapper}>
      <PageHeader title={t("tags")} />
      <div className={styles.header}>
        <span className={styles.icon}>
          <Icon name="hashtag" />
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
