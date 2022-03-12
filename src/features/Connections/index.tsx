import classNames from "classnames";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { v4 as uuid } from "uuid";
import styles from "./Connections.module.css";
import { useConnections } from "./hooks/useConnections";
import { Button } from "@components/Buttons/Button";
import { Card } from "@components/Card";
import { Icon } from "@components/Icon";
import { PageStatus } from "@components/PageStatus";
import { User } from "@components/User";
import { UserInfo } from "@components/UserInfo";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import { useNavigation } from "@hooks/useNavigation";
import type { ConnectionsProps } from "./@types";

export function Connections({ type }: ConnectionsProps) {
  const { CONNECTIONS_TABS, connections, user } = useConnections({
    type,
  });
  const { user: userAccount } = useAccountContext();
  const { formatProfilePageRoute } = useNavigation();
  const { t } = useTranslation("connection");

  const isPrivate = user?.isPrivate && user.connectionStatus !== 2;
  const isYourProfile = user?.id == userAccount?.id;

  return (
    <Card>
      <div className={styles.header}>
        <Link
          href={user ? formatProfilePageRoute(user?.username) : PageUrls.HOME}
        >
          <a className={styles.back}>
            <Icon className={styles.icon} name="chevronLeft" />
          </a>
        </Link>
        <UserInfo size="large" showAvatar={false} user={user} />
      </div>

      {isPrivate && !isYourProfile && user.connectionStatus !== 2 && (
        <PageStatus
          title={t("status.private.title")}
          description={t("status.private.description")}
          icon={<Icon name="lockClosed" className="w-12" />}
          className={styles.privateStatus}
        />
      )}

      {(!isPrivate || isYourProfile || user.connectionStatus === 2) && (
        <>
          <div className={styles.buttons}>
            {Object.values(CONNECTIONS_TABS).map(({ title, onClick }) => (
              <Button
                key={uuid()}
                onClick={onClick}
                className={classNames(
                  styles.button,
                  type === title && styles.active,
                )}
              >
                {title}
              </Button>
            ))}
          </div>
          {connections[type]?.connections ? (
            connections[type]?.connections?.map(connection => (
              <User
                key={connection.id}
                user={
                  type == "following"
                    ? connection.following
                    : connection.follower
                }
                showFollow
              />
            ))
          ) : (
            <PageStatus
              title={t("status.noConnections.title")}
              icon={<Icon name="user" className="w-12" />}
              className={styles.noConnectionsStatus}
            />
          )}
        </>
      )}
    </Card>
  );
}
