import { GlobeIcon, PlusIcon, ViewGridIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { v4 as uuid } from "uuid";
import { Avatar } from "../Avatar";
import styles from "./SidebarNavigation.module.css";
import { NotificationIcon } from "./components/NotificationIcon";
import { Card } from "@components/Card";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import { useClassName } from "@hooks/useClassName";
import { useNavigation } from "@hooks/useNavigation";
import { NavigationItem } from "@t/navigation";

export function SidebarNavigation() {
  const { activeClass } = useClassName();
  const { formatProfilePageRoute } = useNavigation();
  const { user } = useAccountContext();
  const { t } = useTranslation("pages");
  const items: NavigationItem[] = [
    {
      title: t("notifications"),
      icon: <NotificationIcon />,
      href: PageUrls.NOTIFICATIONS,
    },
    {
      title: t("search"),
      icon: <GlobeIcon />,
      href: PageUrls.SEARCH,
    },
    {
      title: t("home"),
      icon: <ViewGridIcon />,
      href: PageUrls.HOME,
    },
    {
      title: t("addPost"),
      icon: <PlusIcon />,
      href: PageUrls.ADD_POST,
    },
  ];

  return user ? (
    <div className={styles.wrapper}>
      <Card className={styles.card}>
        <Link href={formatProfilePageRoute(user?.username)}>
          <a className={styles.header}>
            <Avatar size="extra" className={styles.avatar} />
            <span className={styles.fullName}>{user.fullName}</span>
            <span className={styles.username}>@{user.username}</span>
          </a>
        </Link>
        <div className={styles.navLinks}>
          {items.map(({ title, icon, href }) => (
            <Link key={uuid()} href={href}>
              <a
                className={`${styles.navLink} ${activeClass({
                  href: href,
                  className: styles.active,
                })}`}
              >
                <span className={styles.icon}>{icon}</span>
                <span className={styles.title}>{title}</span>
              </a>
            </Link>
          ))}
        </div>
      </Card>
    </div>
  ) : (
    <></>
  );
}
