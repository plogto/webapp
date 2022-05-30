import { isMobile } from "react-device-detect";
import { ID } from "@constants";
import { Img } from "@components/Img";
import { PageHeader } from "@components/PageHeader";
import styles from "./Profile.module.css";
import { ProfileInfo, NotFound, ProfileContent } from "./components";
import { useProfile } from "./hooks/useProfile";

export function Profile() {
  const { userData, isUserLoading, TABS } = useProfile();

  return !userData && !isUserLoading ? (
    <NotFound />
  ) : userData ? (
    <>
      <div className={styles.wrapper}>
        {isMobile && (
          <PageHeader className={styles.header} title={userData?.fullName} />
        )}
        <div className={styles.background}>
          {userData?.background && (
            <Img
              alt={`${userData.username}'s background`}
              image={userData.background}
            />
          )}
        </div>
        <div className={styles.cards} id={ID.PROFILE_CARDS}>
          <ProfileInfo user={userData} />
          <ProfileContent tabs={TABS} user={userData} />
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}
