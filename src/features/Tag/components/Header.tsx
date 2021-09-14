import styles from "../Tag.module.css";

type Props = {
  tagName: string;
};

export default function Header({ tagName }: Props) {
  return (
    <div className={styles.header}>
      <span className={styles.tagName}>#{tagName}</span>
    </div>
  );
}
