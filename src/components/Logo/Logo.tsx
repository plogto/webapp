import Link from "next/link";
import { Icon } from "@components/Icon";
import { PageUrls } from "@enums/pages";
import styles from "./Logo.module.css";
import type { LogoProps } from "./Logo.types";

export function Logo(props: LogoProps) {
  const { isClickable = true } = props;
  return isClickable ? (
    <Link href={PageUrls.HOME}>
      <a className={styles.logoWrapper}>
        <Icon name="PlogFill" className={styles.logo} />
      </a>
    </Link>
  ) : (
    <div className={styles.logoWrapper}>
      <Icon name="PlogFill" className={styles.logo} />
    </div>
  );
}
