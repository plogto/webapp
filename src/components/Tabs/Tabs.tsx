import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Tabs.module.css";
import type { TabsProps } from "./Tabs.types";

export function Tabs(props: TabsProps) {
  const { tabs } = props;
  const { asPath } = useRouter();

  const isTabActive = (href: string) => asPath === href;

  return (
    <div className={styles.tabs}>
      {tabs.map(({ title, href }) => (
        <Link key={title} href={href}>
          <a
            className={classNames(
              styles.tab,
              isTabActive(href) && styles.active,
            )}
          >
            {title}
          </a>
        </Link>
      ))}
    </div>
  );
}
