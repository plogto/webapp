import Link from "next/link";
import { Icon } from "@components/Icon";
import { useNavigator } from "@hooks/useNavigator";
import styles from "./TagInfo.module.css";
import type { TagInfoProps } from "./TagInfo.types";

export function TagInfo(props: TagInfoProps) {
  const {
    tag: { name, count },
  } = props;
  const { formatTagPageRoute } = useNavigator();

  return (
    <div className={styles.wrapper}>
      {name && (
        <Link href={formatTagPageRoute(name)}>
          <a className={styles.tagInfo}>
            <span className={styles.icon}>
              <Icon name="Hashtag" />
            </span>
            <div>
              <div className={styles.tagName}>{name}</div>
              <div className={styles.tagCount}>{count} posts</div>
            </div>
          </a>
        </Link>
      )}
    </div>
  );
}
