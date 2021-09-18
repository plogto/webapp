import { useAccountContext } from "@context/AccountContext";
import { PageUrls } from "@enums/pages";
import { Search } from "@features/Search";
import { DesktopTrends } from "@features/Trends";
import { useRouter } from "next/router";
import { ReactNode } from "react";

import { Navbar } from "../Navbar";
import { SidebarNavigation } from "../SidebarNavigation";
import styles from "./Layout.module.css";

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props): JSX.Element {
  const { user } = useAccountContext();
  const { pathname } = useRouter();

  const limitedRoutes = [PageUrls.SEARCH];

  return user ? (
    <div className={styles.wrapper}>
      <Navbar />
      <SidebarNavigation />
      {children}
      <div className="hidden lg:block px-5 w-9/12">
        {!limitedRoutes.includes(pathname as PageUrls) && <Search />}
        <DesktopTrends />
      </div>
    </div>
  ) : (
    <div className="mx-auto w-full lg:w-128">{children}</div>
  );
}
