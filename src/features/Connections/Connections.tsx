import { isMobile } from "react-device-detect";
import { ID } from "@constants";
import { PageLoaderHeightType } from "@enums";
import { DefaultBackground } from "@components/DefaultBackground/DefaultBackground";
import { Img } from "@components/Img";
import { PageHeader } from "@components/PageHeader";
import { PageLoader } from "@components/PageLoader";
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

  if (isUserLoading) {
    return <PageLoader heightType={PageLoaderHeightType.FULL} />;
  }

  if (userData) {
    return (
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
    );
  }

  return null;
}
