import { isMobile } from "react-device-detect";
import { ID } from "@constants";
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
  // const isPrivate = user?.isPrivate && user.connectionStatus !== 2;
  // const isYourProfile = user?.id == userAccount?.id;

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
            {userData?.background && (
              <Img
                alt={`${userData.username}'s background`}
                image={userData.background}
              />
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

// return (
//     <Card>
//       <PageHeader title={user?.fullName} />
//       {isPrivate && !isYourProfile && user.connectionStatus !== 2 && (
//         <ContentStatus
//           title={t("status.private.title")}
//           description={t("status.private.description")}
//           icon="LockClosed"
//           className={styles.privateStatus}
//         />
//       )}

//       {(!isPrivate || isYourProfile || user.connectionStatus === 2) && (
//         <>
//           <div className={styles.buttons}>
//             {Object.values(CONNECTIONS_TABS).map(({ title, onClick }) => (
//               <Button
//                 key={uuid()}
//                 onClick={onClick}
//                 className={classNames(
//                   styles.button,
//                   type === title.toLowerCase() && styles.active,
//                 )}
//               >
//                 {title}
//               </Button>
//             ))}
//           </div>
//           {connections[type]?.connections ? (
//             connections[type]?.connections?.map(connection => (
//               <User
//                 key={connection.id}
//                 user={
//                   type == "following"
//                     ? connection.following
//                     : connection.follower
//                 }
//                 showFollow
//               />
//             ))
//           ) : (
//             <ContentStatus
//               title={t("status.noConnections.title")}
//               icon="User"
//               className={styles.noConnectionsStatus}
//             />
//           )}
//         </>
//       )}
//     </Card>
//   );
