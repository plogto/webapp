import classNames from "classnames";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "./Settings.module.css";
import { AvatarProfile } from "./components/AvatarProfile";
import { BackgroundProfile } from "./components/BackgroundProfile";
import { LogoutButton } from "./components/LogoutButton";
import { SETTINGS_ITEMS } from "./constants";
import { useSettings } from "./hooks/useSettings";
import { Card } from "@components/Card";
import { Icon } from "@components/Icon";
import { ModalProvider } from "@contexts/ModalContext";
import { PageUrls } from "@enums/pages";
import { useNavigation } from "@hooks/useNavigation";

export function Settings() {
  const { user } = useSettings();
  const { formatProfilePageRoute } = useNavigation();
  const { t } = useTranslation("settings");

  return (
    <>
      <Card className={styles.settings}>
        <div className={styles.header}>
          <Link
            href={user ? formatProfilePageRoute(user?.username) : PageUrls.HOME}
          >
            <a className={styles.back}>
              <Icon className={styles.icon} name="chevronLeft" />
            </a>
          </Link>
          <h2 className={styles.title}>{t("texts.settings")}</h2>
        </div>
        <div className={styles.images}>
          <ModalProvider>
            <BackgroundProfile background={user?.background} />
          </ModalProvider>
          <ModalProvider>
            <AvatarProfile avatar={user?.avatar} />
          </ModalProvider>
        </div>
      </Card>
      <Card className={styles.itemsWrapper}>
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
    </>
  );
}
