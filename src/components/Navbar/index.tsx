import {
  UserCircleIcon,
  ViewGridIcon,
  BellIcon,
  PlusIcon,
  GlobeIcon,
} from "@heroicons/react/solid";
import { v4 as uuid } from "uuid";
import styles from "./Navbar.module.css";
import NavLink from "@/components/NavLink";
import { useAccountContext } from "@/context/AccountContext";
import { PageUrls } from "@/@enums/pages";

export default function Navbar() {
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
    <div className={styles.container}>
      <div className={styles.navbar}>
        {items.map(item => (
          <NavLink key={uuid()} {...item} />
        ))}
      </div>
    </div>
  ) : (
    <></>
  );
}
