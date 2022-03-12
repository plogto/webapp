import styles from "../Tag.module.css";
import { Icon } from "@components/Icon";
import { formatCountTitle } from "@utils/formatter";
import type { Tag } from "@t/tag";

type Props = {
  tag: Tag;
};

export function Header({ tag: { name, count } }: Props) {
  return (
    <div className={styles.header}>
      <span className={styles.icon}>
        <Icon name="hashtag" />
      </span>
      <div>
        <div className={styles.tagName}>{name}</div>
        <div className={styles.tagCount}>
          {formatCountTitle({ singular: "post", plural: "posts", count }).text}
        </div>
      </div>
    </div>
  );
}
