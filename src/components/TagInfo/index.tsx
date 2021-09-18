import type { User } from "@/@types/user";
import { HashtagIcon } from "@heroicons/react/solid";
import styles from "./TagInfo.module.css";
import Link from "next/link";
import { Tag } from "@/@types/tag";

type Props = {
  tag: Tag;
};

export function TagInfo({ tag: { name, count } }: Props) {
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
