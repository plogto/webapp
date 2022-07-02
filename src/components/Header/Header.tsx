import { Logo } from "@components/Logo/Logo";
import { Navbar } from "@components/Navbar";
import styles from "./Header.module.css";
import type { HeaderProps } from "./Header.types";

export function Header(props: HeaderProps) {
  const { user } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Logo />
        {user && (
          <div className={styles.navbar}>
            <Navbar user={user} />
          </div>
        )}
      </div>
    </div>
  );
}
