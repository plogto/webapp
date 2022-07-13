import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Card } from "@components/Card";
import { Icon } from "@components/Icon";
import { useNavigator } from "@hooks/useNavigator";
import { formatCountTitle } from "@utils/formatter";
import styles from "./Trends.module.css";
import { useTrends } from "./useTrends";

export function DesktopTrends() {
  const { tags } = useTrends();
  const { t } = useTranslation("common");
  const { formatTagPageRoute } = useNavigator();
  return (
    <Card className={styles.trends} shadow rounded>
      <span className={styles.header}>
        <span className={styles.title}>{t("trends")}</span>
        <Icon name="TrendingUp" />
      </span>
      {tags?.map(({ id, name, count }) => (
        <Link key={id} href={formatTagPageRoute(name)}>
          <a className={styles.tag}>
            <span className={styles.tagName}>#{name}</span>
            <span className={styles.tagCount}>
              {
                formatCountTitle({
                  singular: t("post"),
                  plural: t("posts"),
                  count,
                }).text
              }
            </span>
          </a>
        </Link>
      ))}
    </Card>
  );
}
