import type { ReactNode } from "react";
import styles from "./LinkButton.module.css";
import Link from "next/link";

type Props = {
  href: string;
  className?: string;
  children?: ReactNode;
};

export function LinkButton({ className, children, href }: Props): JSX.Element {
  return (
    <Link href={href}>
      <a className={`${styles.linkButton} ${className}`}>{children}</a>
    </Link>
  );
}
