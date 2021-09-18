import styles from "./Layout.module.css";
import { useAccountContext } from "@context/AccountContext";
import { SidebarNavigation } from "../SidebarNavigation";
import { ReactNode } from "react";
import { Navbar } from "../Navbar";
import { Search } from "@features/Search";
import { useRouter } from "next/router";
import { PageUrls } from "@enums/pages";
import { DesktopTrends } from "@features/Trends";

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
    <div className="mx-auto w-128">{children}</div>
  );
}
