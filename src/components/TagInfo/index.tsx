import Link from "next/link";
import { TagInfoProps } from "./@types";
import styles from "./TagInfo.module.css";
import { Icon } from "@components/Icon";
import { useNavigation } from "@hooks/useNavigation";

export function TagInfo(props: TagInfoProps) {
  const {
    tag: { name, count },
  } = props;
  const { formatTagPageRoute } = useNavigation();

  return (
    <div className={styles.wrapper}>
      {name && (
        <Link href={formatTagPageRoute(name)}>
          <a className={styles.tagInfo}>
            <span className={styles.icon}>
              <Icon name="hashtag" />
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
