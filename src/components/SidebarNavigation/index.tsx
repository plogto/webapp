import {
  ViewGridIcon,
  BellIcon,
  PlusIcon,
  GlobeIcon,
} from "@heroicons/react/solid";
import { v4 as uuid } from "uuid";
import styles from "./SidebarNavigation.module.css";
import { useAccountContext } from "@/context/AccountContext";
import { PageUrls } from "@/@enums/pages";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Avatar from "../Avatar";
import { useClassName } from "@/hooks/useClassName";

export default function SidebarNavigation() {
  const { activeClass } = useClassName();
  const { user } = useAccountContext();
  const { t } = useTranslation("common");
  const items = [
    {
      title: t("notifications"),
      icon: <BellIcon />,
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
      <div className={styles.card}>
        <Link href={`/${user?.username}`}>
          <a className={styles.header}>
            <Avatar className={styles.avatar} />
            <span className={styles.fullname}>{user.fullname}</span>
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
      </div>
    </div>
  ) : (
    <></>
  );
}
