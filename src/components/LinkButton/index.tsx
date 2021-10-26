import Link from "next/link";
import { LinkButtonProps } from "./@types";

export function LinkButton(props: LinkButtonProps) {
  const { className, children, href } = props;

  return (
    <Link href={href}>
      <a className={`button ${className}`}>{children}</a>
    </Link>
  );
}
