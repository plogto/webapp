import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import { Search } from "@features/Search";
import { DesktopTrends } from "@features/Trends";
import { Navbar } from "../Navbar";
import { SidebarNavigation } from "../SidebarNavigation";
import { LayoutProps } from "./@types";
import styles from "./Layout.module.css";
import { useRouter } from "next/router";

export function Layout(props: LayoutProps) {
  const { children } = props;
  const { user } = useAccountContext();
  const { pathname } = useRouter();

  const limitedRoutes = [PageUrls.SEARCH];

  return user ? (
    <div className={styles.layout}>
      <Navbar />
      <SidebarNavigation />
      {children}
      <div className="hidden md:block w-8/12 mt-4">
        <div className="sticky top-4 flex flex-col space-y-4">
          {!limitedRoutes.includes(pathname as PageUrls) && <Search />}
          <DesktopTrends />
        </div>
      </div>
    </div>
  ) : (
    <div className="mx-auto w-full md:w-[36.5rem]">{children}</div>
  );
}
