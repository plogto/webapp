import type { ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./NavLink.module.css";

type Props = {
  href?: string;
  className?: string;
  icon?: ReactNode;
};

export default function NavLink({ icon, href }: Props) {
  const router = useRouter();

  return href ? (
    <Link href={href}>
      <a
        className={`${styles.navLink} ${
          router.pathname === href ? styles.active : ""
        }`}>
        {icon}
      </a>
    </Link>
  ) : (
    <></>
  );
}
