import { HashtagIcon } from "@heroicons/react/solid";
import styles from "./TagInfo.module.css";
import Link from "next/link";
import type { Tag } from "@t/tag";

type Props = {
  tag: Tag;
};

export function TagInfo({ tag: { name, count } }: Props): JSX.Element {
  return (
    <div className={styles.wrapper}>
      {name && (
        <Link href={`/t/${name}`}>
          <a className={styles.tagInfo}>
            <span className={styles.icon}>
              <HashtagIcon />
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
