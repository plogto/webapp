import {
  BellIcon,
  GlobeIcon,
  PlusIcon,
  UserCircleIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { v4 as uuid } from "uuid";
import styles from "./Navbar.module.css";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import { useClassName } from "@hooks/useClassName";
import { NavigationItem } from "@t/navigation";

export function Navbar() {
  const { activeClass } = useClassName();
  const { user } = useAccountContext();
  const items: NavigationItem[] = [
    {
      icon: <BellIcon />,
      href: PageUrls.NOTIFICATIONS,
    },
    {
      icon: <GlobeIcon />,
      href: PageUrls.SEARCH,
    },
    {
      icon: <PlusIcon />,
      href: PageUrls.ADD_POST,
    },
    {
      icon: <ViewGridIcon />,
      href: PageUrls.HOME,
    },
    {
      icon: <UserCircleIcon />,
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
