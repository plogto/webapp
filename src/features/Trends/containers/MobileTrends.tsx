import { TrendingUpIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "../Trends.module.css";
import { useTrends } from "../hooks/useTrends";
import { useNavigation } from "@hooks/useNavigation";
import { formatCountTitle } from "@utils/formatter";

export function MobileTrends() {
  const { tags } = useTrends();
  const { t } = useTranslation("common");
  const { formatTagPageRoute } = useNavigation();
  return (
    <div className={styles.mobileWrapper}>
      <span className={styles.mobileHeader}>
        <span className={styles.mobileTitle}>{t("trends")}</span>
        <TrendingUpIcon />
      </span>
      {tags && tags.length > 0 && (
        <div className={styles.mobileTags}>
          <Link href={formatTagPageRoute(tags[0]?.name)}>
            <a className={styles.mobileFirstTag}>
              <span className={styles.mobileFirstTagName}>#{tags[0].name}</span>
              <span className={styles.mobileFirstTagCount}>
                {
                  formatCountTitle({
                    singular: t("post"),
                    plural: t("posts"),
                    count: tags[0].count,
                  }).text
                }
              </span>
            </a>
          </Link>
          {[...tags].splice(1).map(({ id, name, count }) => (
            <Link key={id} href={formatTagPageRoute(name)}>
              <a className={styles.mobileTag}>
                <span className={styles.mobileTagName}>#{name}</span>
                <span className={styles.mobileTagCount}>
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
      )}
    </div>
  );
}
