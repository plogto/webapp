import { PhotographIcon } from "@heroicons/react/outline";
import { LockClosedIcon } from "@heroicons/react/solid";
import { useTranslation } from "react-i18next";
import styles from "./Profile.module.css";
import { Header, NotFound } from "./components";
import { useProfile } from "./hooks/useProfile";
import { PageStatus } from "@components/PageStatus";
import { Posts } from "@components/Posts";
import { useAccountContext } from "@contexts/AccountContext";

export function Profile() {
  const { user: userAccount } = useAccountContext();
  const { userData, postsData, isUserLoading, isPostsLoading } = useProfile();
  const { t } = useTranslation("profile");

  const isPostsData = postsData && postsData?.length > 0;
  const isPrivate = userData?.isPrivate;
  const isYourProfile = userData?.id == userAccount?.id;

  return !userData && !isUserLoading ? (
    <NotFound />
  ) : (
    <>
      <div className={styles.profile}>
        {/* Header */}
        {userData && <Header {...userData} />}
        {/* Posts */}
        {isPostsData && <Posts className={styles.posts} posts={postsData} />}
        {/* Page Status */}
        {!isPostsData && !isUserLoading && !isYourProfile && isPrivate && (
          <PageStatus
            title={t("status.private.title")}
            description={t("status.private.description")}
            icon={<LockClosedIcon strokeWidth="1" className="w-12" />}
            className={styles.privateStatus}
          />
        )}
        {!isPostsData && !isPostsLoading && (!isPrivate || isYourProfile) && (
          <PageStatus
            title={t("status.noPosts.title")}
            description={t("status.noPosts.description")}
            icon={<PhotographIcon strokeWidth="1" className="w-12" />}
            className={styles.noPostsStatus}
          />
        )}
      </div>
    </>
  );
}
