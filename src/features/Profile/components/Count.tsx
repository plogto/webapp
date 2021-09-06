import styles from "../Profile.module.css";
import Link from "next/link";

type Props = {
  className?: string;
  title?: string;
  href: string;
  value?: number;
  clickable?: boolean;
};

export default function Count({ title, value, href, clickable }: Props) {
  return clickable ? (
    <Link href={href}>
      <a className={`${styles.count} clickable`}>
        <span className="text-gray-900 font-bold">{`${value}`}</span>
        {` ${title}`}
      </a>
    </Link>
  ) : (
    <div className={styles.count}>
      <span className="text-gray-900 font-bold">{`${value}`}</span>
      {` ${title}`}
    </div>
  );
}
