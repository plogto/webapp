import { isMobile } from "react-device-detect";
import { Navbar } from "@components/Navbar";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import { Search } from "@features/Search";
import { DesktopTrends } from "@features/Trends";
import { Header } from "../Header";
import { LayoutProps } from "./@types";
import styles from "./Layout.module.css";
import { useRouter } from "next/router";

export function Layout(props: LayoutProps) {
  const { children } = props;
  const { user } = useAccountContext();
  const { pathname } = useRouter();

  const limitedRoutes = [PageUrls.SEARCH];

  return user ? (
    <>
      {!isMobile && <Header user={user} />}
      <div className={styles.layout}>
        {children}
        <div className="hidden md:block w-8/12 mt-4">
          <div className="sticky top-4 flex flex-col space-y-4 mb-4">
            {!limitedRoutes.includes(pathname as PageUrls) && <Search />}
            <DesktopTrends />
          </div>
        </div>
        <div className={styles.footer}>
          {isMobile && <Navbar user={user} />}
        </div>
      </div>
    </>
  ) : (
    <div className="mx-auto w-full md:w-[36.5rem]">{children}</div>
  );
}
