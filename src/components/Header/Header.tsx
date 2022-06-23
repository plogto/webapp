import Link from "next/link";
import { Icon } from "@components/Icon";
import { Navbar } from "@components/Navbar";
import { PageUrls } from "@enums/pages";
import styles from "./Header.module.css";
import { HeaderProps } from "./Header.types";

export function Header(props: HeaderProps) {
  const { user } = props;

  return user ? (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Link href={PageUrls.HOME}>
          <a className={styles.logoWrapper}>
            <Icon name="PlogFill" className={styles.logo} />
          </a>
        </Link>
        <div className={styles.navbar}>
          <Navbar user={user} />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
