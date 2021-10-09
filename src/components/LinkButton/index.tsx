import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  className?: string;
  children?: ReactNode;
};

export function LinkButton({ className, children, href }: Props) {
  return (
    <Link href={href}>
      <a className={`button ${className}`}>{children}</a>
    </Link>
  );
}
