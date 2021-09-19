import { ReactNode } from "react";
import styles from "./PageStatus.module.css";

type Props = {
  title: string;
  description?: string;
  icon: ReactNode;
  className?: string;
};

export function PageStatus({ title, icon, description, className }: Props) {
  return (
    <div className={`${styles.wrapper} ${className || ""}`}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.title}>{title}</div>
      {description && <div className={styles.description}>{description}</div>}
    </div>
  );
}
