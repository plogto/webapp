import styles from "../Profile.module.css";

type Props = {
  className?: string;
  title?: string;
  value?: number;
};

export default function Count({ className, title, value }: Props) {
  return (
    <div key={title} className={styles.count}>
      <span className="text-gray-900 font-bold">{`${value}`}</span>
      {` ${title}`}
    </div>
  );
}
