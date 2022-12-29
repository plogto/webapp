import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { Icon } from "@components/Icon";
import styles from "./Tabs.module.css";
import type { TabsProps } from "./Tabs.types";

export function Tabs(props: TabsProps) {
  const { tabs } = props;
  const { asPath } = useRouter();

  const isTabActive = (href: string) => asPath === href;

  return (
    <div className={styles.tabs}>
      {tabs.map(({ title, href, icon }) => (
        <Link key={title} href={href} replace>
          <a
            className={classNames(
              styles.tab,
              isTabActive(href) && styles.active,
            )}
          >
            {icon && <Icon name={icon} className={styles.icon} />}
            <span>{title}</span>
          </a>
        </Link>
      ))}
    </div>
  );
}
