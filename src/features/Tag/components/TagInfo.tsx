import { Card } from "@components/Card";
import { Icon } from "@components/Icon";
import { formatCountTitle } from "@utils/formatter";
import styles from "../Tag.module.css";
import type { TagInfoProps } from "../Tag.types";

export function TagInfo(props: TagInfoProps) {
  const {
    tag: { name, count },
  } = props;

  return (
    <Card className={styles.tagInfo}>
      <span>
        <span className={styles.iconWrapper}>
          <Icon name="Hashtag" className={styles.icon} />
        </span>
      </span>
      <div className={styles.nameWrapper}>
        <div className={styles.name}>{name}</div>
        <div className={styles.count}>
          {formatCountTitle({ singular: "post", plural: "posts", count }).text}
        </div>
      </div>
    </Card>
  );
}
