import classNames from "classnames";
import { v4 as uuid } from "uuid";
import Link from "next/link";
import { Avatar } from "@components/Avatar";
import { Icon } from "@components/Icon";
import { PageUrls } from "@enums/pages";
import { useNavigator } from "@hooks/useNavigator";
import { NavigationItem } from "@t/navigation";
import styles from "./Navbar.module.css";
import { NavbarProps } from "./Navbar.types";
import { NotificationIcon } from "./components/NotificationIcon";

export function Navbar(props: NavbarProps) {
  const { user } = props;
  const { isRouteActive } = useNavigator();

  const NAVIGATION_ITEMS: NavigationItem[] = [
    {
      icon: <NotificationIcon />,
      href: PageUrls.NOTIFICATIONS,
    },
    {
      icon: <Icon name="GlobeFill" />,
      href: PageUrls.SEARCH,
    },
    {
      icon: <Icon name="PlusCircleFill" />,
      href: PageUrls.ADD_POST,
    },
    {
      icon: <Icon name="ViewGridFill" />,
      href: PageUrls.HOME,
    },
    {
      icon: (
        <Avatar
          size="mini"
          className={styles.avatar}
          avatar={user?.avatar}
          alt={user?.fullName}
        />
      ),
      href: `/${user?.username}`,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        {NAVIGATION_ITEMS.map(({ href, icon }) => (
          <Link key={uuid()} href={href}>
            <a
              className={classNames(
                styles.navLink,
                isRouteActive(href) && styles.active,
              )}
            >
              {icon}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
