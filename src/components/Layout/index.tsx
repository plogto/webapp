import { useRouter } from "next/router";
import { Navbar } from "../Navbar";
import { SidebarNavigation } from "../SidebarNavigation";
import { LayoutProps } from "./@types";
import styles from "./Layout.module.css";
import { Wrapper } from "@components/Wrapper";
import { useAccountContext } from "@context/AccountContext";
import { PageUrls } from "@enums/pages";
import { Search } from "@features/Search";
import { DesktopTrends } from "@features/Trends";

export function Layout(props: LayoutProps) {
  const { children } = props;
  const { user } = useAccountContext();
  const { pathname } = useRouter();

  const limitedRoutes = [PageUrls.SEARCH];

  return user ? (
    <div className={styles.wrapper}>
      <Navbar />
      <SidebarNavigation />
      {children}
      <div className="hidden md:block w-8/12 mt-5">
        {!limitedRoutes.includes(pathname as PageUrls) && (
          <Wrapper className="mb-5">
            <Search />
          </Wrapper>
        )}
        <DesktopTrends />
      </div>
    </div>
  ) : (
    <div className="mx-auto w-full md:w-146">{children}</div>
  );
}
