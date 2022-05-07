import { v4 as uuid } from "uuid";
import { Avatar } from "@components/Avatar";
import { Icon } from "@components/Icon";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import { useClassName } from "@hooks/useClassName";
import { NavigationItem } from "@t/navigation";
import styles from "./Navbar.module.css";
import Link from "next/link";

export function Navbar() {
  const { activeClass } = useClassName();
  const { user } = useAccountContext();
  const items: NavigationItem[] = [
    {
      icon: <Icon name="BellFill" />,
      href: PageUrls.NOTIFICATIONS,
    },
    {
      icon: <Icon name="GlobeFill" />,
      href: PageUrls.SEARCH,
    },
    {
      icon: <Icon name="Plus" />,
      href: PageUrls.ADD_POST,
    },
    {
      icon: <Icon name="ViewGridFill" />,
      href: PageUrls.HOME,
    },
    {
      icon: (
        <Avatar size="tiny" className={styles.avatar} avatar={user?.avatar} />
      ),
      href: `/${user?.username}`,
    },
  ];

  return user ? (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        {items.map(({ href, icon }) => (
          <Link key={uuid()} href={href}>
            <a
              className={`${styles.navLink} ${activeClass({
                href,
                className: styles.active,
              })}`}
            >
              {icon}
            </a>
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
}
