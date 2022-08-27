import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import Link from "next/link";
import { BackgroundProfile } from "@components/BackgroundProfile";
import { Card } from "@components/Card";
import { Icon } from "@components/Icon";
import { PageHeader } from "@components/PageHeader";
import { ModalProvider } from "@contexts/ModalContext";
import { useNavigator } from "@hooks/useNavigator";
import { SETTINGS_ITEMS } from "./Settings.constants";
import styles from "./Settings.module.css";
import { SettingsProps } from "./Settings.types";
import { LogoutButton } from "./components/LogoutButton";
import { useSettings } from "./useSettings";

export function Settings(props: SettingsProps) {
  const { title, children } = props;
  const { user } = useSettings();
  const { t } = useTranslation("settings");
  const { isSettingsPage } = useNavigator();

  return (
    <div className={styles.settings}>
      <div>
        {isMobile && (
          <PageHeader
            title={title || t("texts.settings")}
            className={styles.header}
          />
        )}
        {!(isMobile && !isSettingsPage && children) && (
          <div className={styles.images}>
            <ModalProvider>
              <BackgroundProfile background={user?.background} />
            </ModalProvider>
          </div>
        )}
      </div>
      <div className={styles.cards}>
        {!(isMobile && !isSettingsPage && children) && (
          <Card shadow={!isMobile} rounded={!isMobile} className={styles.items}>
            {SETTINGS_ITEMS.map(({ title, icon, href, className }) => (
              <Link key={`settings-${title}`} href={href}>
                <a className={classNames(styles.item, className)}>
                  {icon && <Icon className={styles.icon} name={icon} />}
                  <span>{title}</span>
                </a>
              </Link>
            ))}
            <ModalProvider>
              <LogoutButton className={styles.logoutButton} />
            </ModalProvider>
          </Card>
        )}
        {children}
      </div>
    </div>
  );
}
