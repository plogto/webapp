import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { v4 as uuid } from "uuid";
import styles from "./Connections.module.css";
import { useConnections } from "./hooks/useConnections";
import { Button } from "@components/Buttons/Button";
import { Card } from "@components/Card";
import { Icon } from "@components/Icon";
import { PageHeader } from "@components/PageHeader";
import { PageStatus } from "@components/PageStatus";
import { User } from "@components/User";
import { useAccountContext } from "@contexts/AccountContext";
import type { ConnectionsProps } from "./@types";

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
