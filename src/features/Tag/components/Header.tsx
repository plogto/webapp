import { HashtagIcon } from "@heroicons/react/solid";
import styles from "../Tag.module.css";

type Props = {
  tagName: string;
};

export default function Header({ tagName }: Props) {
  return (
    <div className={styles.header}>
      <span className={styles.icon}>
        <HashtagIcon />
      </span>
      <div>
        <div className={styles.tagName}>{tagName}</div>
      </div>
    </div>
  );
}
