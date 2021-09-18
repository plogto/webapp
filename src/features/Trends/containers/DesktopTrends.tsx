import { formatCountTitle } from "@utils/formatter";
import { TrendingUpIcon } from "@heroicons/react/solid";
import { useTranslation } from "react-i18next";
import { useTrends } from "../hooks/useTrends";
import styles from "../Trends.module.css";
import Link from "next/link";

export function DesktopTrends() {
  const { tags } = useTrends();
  const { t } = useTranslation("common");
  return (
    <div className={styles.card}>
      <span className={styles.header}>
        <span className={styles.title}>{t("trends")}</span>
        <TrendingUpIcon />
      </span>
      {tags?.map(({ id, name, count }) => (
        <Link key={id} href={`/t/${name}`}>
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
    </div>
  );
}
