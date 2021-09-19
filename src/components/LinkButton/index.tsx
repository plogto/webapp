import Link from "next/link";
import styles from "./LinkButton.module.css";
import type { ReactNode } from "react";

type Props = {
  href: string;
  className?: string;
  children?: ReactNode;
};

export function LinkButton({ className, children, href }: Props) {
  return (
    <Link href={href}>
      <a className={`${styles.linkButton} ${className}`}>{children}</a>
    </Link>
  );
}
