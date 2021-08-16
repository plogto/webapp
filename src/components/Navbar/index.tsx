import styles from "./Navbar.module.css";
import Link from "next/link";
import {
  UserCircleIcon,
  ViewGridIcon,
  BellIcon,
  PlusIcon,
  GlobeIcon,
} from "@heroicons/react/solid";
import NavLink from "@/components/NavLink";

export default function Navbar() {
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
      href: "/dashboard",
    },
    {
      icon: <UserCircleIcon />,
      href: "/",
    },
  ];

  return (
    <div className={styles.navbar}>
      {items.map(item => (
        <NavLink key={item.href} {...item} />
      ))}
    </div>
  );
}
