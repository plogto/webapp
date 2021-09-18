import { Tag } from "@/@types/tag";
import { formatCountTitle } from "@/utils/formatter";
import { HashtagIcon } from "@heroicons/react/solid";
import styles from "../Tag.module.css";

type Props = {
  tag: Tag;
};

export function Header({ tag: { name, count } }: Props) {
  return (
    <div className={styles.header}>
      <span className={styles.icon}>
        <HashtagIcon />
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
