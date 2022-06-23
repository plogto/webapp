import classNames from "classnames";
import Link from "next/link";
import styles from "../ProfileInfo.module.css";

interface Props {
  className?: string;
  title?: string;
  href?: string;
  count?: number;
  clickable?: boolean;
}

// TODO: refactor this component
export function Count({ title, count, href, clickable }: Props) {
  return clickable && href ? (
    <Link href={href}>
      <a className={classNames(styles.count, styles.clickable)}>
        <span className={styles.number}>{count}</span>
        <span className={styles.title}>{title}</span>
      </a>
    </Link>
  ) : (
    <div className={styles.count}>
      <span className={styles.number}>{count}</span>
      <span className={styles.title}>{title}</span>
    </div>
  );
}
