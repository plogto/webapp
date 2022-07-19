import { isMobile } from "react-device-detect";
import classNames from "classnames";
import { Navbar } from "@components/Navbar";
import { useAccountContext } from "@contexts/AccountContext";
import { DesktopTrends } from "@features/Trends";
import { Header } from "../Header";
import styles from "./Layout.module.css";
import type { LayoutProps } from "./Layout.types";

export function Layout(props: LayoutProps) {
  const { children, showTrends } = props;
  const { user } = useAccountContext();

  return (
    <>
      <Header user={user} />
      <div className={styles.layout}>
        <div className="flex items-start md:space-x-4 w-full md:mx-2.5">
          <div
            className={classNames(
              showTrends && !isMobile ? "w-[60%]" : "w-full",
            )}
          >
            {children}
          </div>
          {showTrends && (
            <div className="hidden md:block w-[40%] mt-4">
              <div className="sticky top-[4.5rem] flex flex-col space-y-4 mb-4">
                <DesktopTrends />
              </div>
            </div>
          )}
        </div>
        <div className={styles.footer}>
          {user && isMobile && <Navbar user={user} />}
        </div>
      </div>
    </>
  );
}
