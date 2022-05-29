import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { v4 as uuid } from "uuid";
import { Button } from "@components/Buttons/Button";
import { Card } from "@components/Card";
import { ContentStatus } from "@components/ContentStatus";
import { PageHeader } from "@components/PageHeader";
import { User } from "@components/User";
import { useAccountContext } from "@contexts/AccountContext";
import type { ConnectionsProps } from "./@types";
import styles from "./Connections.module.css";
import { useConnections } from "./hooks/useConnections";

export function Connections({ type }: ConnectionsProps) {
  const { CONNECTIONS_TABS, connections, user } = useConnections({
    type,
  });
  const { user: userAccount } = useAccountContext();
  const { t } = useTranslation("connection");

  const isPrivate = user?.isPrivate && user.connectionStatus !== 2;
  const isYourProfile = user?.id == userAccount?.id;

  return (
    <Card>
      <PageHeader title={user?.fullName} />
      {isPrivate && !isYourProfile && user.connectionStatus !== 2 && (
        <ContentStatus
          title={t("status.private.title")}
          description={t("status.private.description")}
          icon="LockClosed"
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
                  type === title.toLowerCase() && styles.active,
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
            <ContentStatus
              title={t("status.noConnections.title")}
              icon="User"
              className={styles.noConnectionsStatus}
            />
          )}
        </>
      )}
    </Card>
  );
}
