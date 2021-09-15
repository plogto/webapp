import styles from "../Profile.module.css";
import Link from "next/link";

type Props = {
  className?: string;
  title?: string;
  href: string;
  count?: number;
  clickable?: boolean;
};

export default function Count({ title, count, href, clickable }: Props) {
  return clickable ? (
    <Link href={href}>
      <a className={`${styles.count} ${styles.clickable}`}>
        <span className="text-gray-900 font-bold">{`${count}`}</span>
        {` ${title}`}
      </a>
    </Link>
  ) : (
    <div className={styles.count}>
      <span className="text-gray-900 font-bold">{`${count}`}</span>
      {` ${title}`}
    </div>
  );
}
