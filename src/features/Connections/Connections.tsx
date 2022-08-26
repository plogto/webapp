import { isMobile } from "react-device-detect";
import { ID } from "@constants";
import { DefaultBackground } from "@components/DefaultBackground/DefaultBackground";
import { Img } from "@components/Img";
import { NotFound } from "@components/NotFound";
import { PageHeader } from "@components/PageHeader";
import { ProfileInfo } from "@components/ProfileInfo";
import { useNavigator } from "@hooks/useNavigator";
import styles from "./Connections.module.css";
import type { ConnectionsProps } from "./Connections.types";
import { ConnectionsContent } from "./components/ConnectionsContent";
import { useConnections } from "./useConnections";

export function Connections({ type }: ConnectionsProps) {
  const { userData, isUserLoading, TABS } = useConnections({
    type,
  });
  const { formatProfilePageRoute } = useNavigator();

  return !userData && !isUserLoading ? (
    <NotFound />
  ) : userData ? (
    <>
      <div className={styles.wrapper}>
        {isMobile && (
          <PageHeader
            className={styles.header}
            title={userData?.fullName}
            backLink={formatProfilePageRoute(userData.username)}
          />
        )}
        {!isMobile && (
          <div className={styles.background}>
            {userData?.background ? (
              <Img
                alt={`${userData.username}'s background`}
                image={userData.background}
              />
            ) : (
              <DefaultBackground />
            )}
          </div>
        )}
        <div className={styles.cards} id={ID.PROFILE_CARDS}>
          {!isMobile && <ProfileInfo user={userData} />}
          <ConnectionsContent tabs={TABS} user={userData} />
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}
