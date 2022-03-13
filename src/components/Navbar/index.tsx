import Link from "next/link";
import { v4 as uuid } from "uuid";
import styles from "./Navbar.module.css";
import { Avatar } from "@components/Avatar";
import { Icon } from "@components/Icon";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import { useClassName } from "@hooks/useClassName";
import { NavigationItem } from "@t/navigation";

export function Navbar() {
  const { activeClass } = useClassName();
  const { user } = useAccountContext();
  const items: NavigationItem[] = [
    {
      icon: <Icon name="bell" type="fill" />,
      href: PageUrls.NOTIFICATIONS,
    },
    {
      icon: <Icon name="globe" type="fill" />,
      href: PageUrls.SEARCH,
    },
    {
      icon: <Icon name="plus" type="fill" />,
      href: PageUrls.ADD_POST,
    },
    {
      icon: <Icon name="viewGrid" type="fill" />,
      href: PageUrls.HOME,
    },
    {
      icon: <Avatar size="tiny" />,
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
