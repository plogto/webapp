import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { ID } from "@constants";
import { DefaultBackground } from "@components/DefaultBackground/DefaultBackground";
import { Img } from "@components/Img";
import { NotFound } from "@components/NotFound";
import { PageHeader } from "@components/PageHeader";
import { ProfileInfo } from "@components/ProfileInfo";
import { useNavigator } from "@hooks/useNavigator";
import styles from "./Credits.module.css";
import { CreditsContent } from "./components/CreditsContent";
import { useCredits } from "./hooks";

export function Credits() {
  const { userData, getMoreData, emptyStatus, creditTransactions } =
    useCredits();
  const { formatProfilePageRoute } = useNavigator();
  const { t } = useTranslation("common");

  return !userData ? (
    <NotFound />
  ) : userData ? (
    <>
      <div className={styles.wrapper}>
        {isMobile && (
          <PageHeader
            className={styles.header}
            title={t("credits")}
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
        <div className={styles.cards} id={ID.CREDIT_TRANSACTIONS}>
          {!isMobile && <ProfileInfo user={userData} isShowCredit={false} />}
          <CreditsContent
            creditTransactions={creditTransactions}
            emptyStatus={emptyStatus}
            getMoreData={getMoreData}
            user={userData}
          />
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}
