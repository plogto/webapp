import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";
import { Navbar } from "@components/Navbar";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import { Search } from "@features/Search";
import { DesktopTrends } from "@features/Trends";
import { Header } from "../Header";
import styles from "./Layout.module.css";
import type { LayoutProps } from "./Layout.types";

export function Layout(props: LayoutProps) {
  const { children, showTrends } = props;
  const { user } = useAccountContext();
  const { pathname } = useRouter();

  const limitedRoutes = [PageUrls.ADD_POST];

  return user ? (
    <>
      <Header user={user} />
      <div className={styles.layout}>
        <div className="flex items-start space-x-4 w-full md:mx-2.5">
          {children}
          {showTrends && (
            <div className="hidden md:block w-8/12 mt-4 h-[calc(100vh-3.5rem)]">
              <div className="sticky top-[4.5rem] flex flex-col space-y-4 mb-4">
                {limitedRoutes.includes(pathname as PageUrls) && <Search />}
                <DesktopTrends />
              </div>
            </div>
          )}
        </div>
        <div className={styles.footer}>
          {isMobile && <Navbar user={user} />}
        </div>
      </div>
    </>
  ) : (
    <div className={styles.layout}>{children}</div>
  );
}
