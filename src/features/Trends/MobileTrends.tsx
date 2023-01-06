import { useTranslation } from "react-i18next";
import Link from "next/link";
import { Icon } from "@components/Icon";
import { useNavigator } from "@hooks/useNavigator";
import { formatCountTitle } from "@utils/formatter";
import styles from "./Trends.module.css";
import { useTrends } from "./useTrends";

export function MobileTrends() {
  const { tags } = useTrends();
  const { t } = useTranslation("common");
  const { formatTagPageRoute } = useNavigator();
  return (
    <div className={styles.mobileWrapper}>
      <span className={styles.mobileHeader}>
        <span className={styles.mobileTitle}>{t("trends")}</span>
        <Icon name="TrendingUp" />
      </span>
      {tags && tags.length > 0 && (
        <div className={styles.mobileTags}>
          <Link href={formatTagPageRoute(tags[0]?.node.name)} legacyBehavior>
            <a className={styles.mobileFirstTag}>
              <span className={styles.mobileFirstTagName}>
                #{tags[0].node.name}
              </span>
              <span className={styles.mobileFirstTagCount}>
                {
                  formatCountTitle({
                    singular: t("post"),
                    plural: t("posts"),
                    count: tags[0].node.count,
                  }).text
                }
              </span>
            </a>
          </Link>
          {[...tags].splice(1).map(({ node: { id, name, count } }) => (
            <Link key={id} href={formatTagPageRoute(name)} legacyBehavior>
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
