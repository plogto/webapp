import { v4 as uuid } from "uuid";
import styles from "./Navbar.module.css";
import {
  UserCircleIcon,
  ViewGridIcon,
  BellIcon,
  PlusIcon,
  GlobeIcon,
} from "@heroicons/react/solid";
import NavLink from "@/components/NavLink";
import { useAccount } from "@/context/AccountContext";
import { PageUrls } from "@/@enums/pages";

export default function Navbar() {
  const { user } = useAccount();
  const items = [
    {
      icon: <GlobeIcon />,
      href: "/search",
    },
    {
      icon: <BellIcon />,
      href: "/notifications",
    },
    {
      icon: <PlusIcon />,
      href: "/add",
    },
    {
      icon: <ViewGridIcon />,
      href: PageUrls.HOME,
    },
    {
      icon: <UserCircleIcon />,
      href: user?.username,
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
