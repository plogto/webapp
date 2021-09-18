import {
  UserCircleIcon,
  ViewGridIcon,
  BellIcon,
  PlusIcon,
  GlobeIcon,
} from "@heroicons/react/solid";
import { v4 as uuid } from "uuid";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { useAccountContext } from "@context/AccountContext";
import { PageUrls } from "@enums/pages";
import { useClassName } from "@hooks/useClassName";

export function Navbar(): JSX.Element {
  const { activeClass } = useClassName();
  const { user } = useAccountContext();
  const items = [
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
