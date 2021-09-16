import styles from "./Profile.module.css";
import { useProfile } from "./hooks/useProfile";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Posts from "@/components/Posts";
import PageStatus from "@/components/PageStatus";
import { LockClosedIcon } from "@heroicons/react/solid";
import { PhotographIcon } from "@heroicons/react/outline";
import { useTranslation } from "react-i18next";

export default function Profile() {
  const { getUserByUsernameResponse, user, posts } = useProfile();
  const { loading } = getUserByUsernameResponse;
  const { t } = useTranslation("profile");

  return (
    <div className={styles.wrapper}>
      {getUserByUsernameResponse.error?.message ? (
        <NotFound />
      ) : (
        <>
          {/* TODO: move classnames to css file */}
          <div className="w-full h-screen">
            {user && <Header {...user} />}
            {posts && posts?.length > 0 && <Posts posts={posts} />}
            {(!posts || posts.length < 1) && !loading && user?.isPrivate && (
              <PageStatus
                title={t("status.private.title")}
                description={t("status.private.description")}
                icon={<LockClosedIcon strokeWidth="1" className="w-12" />}
                className="mt-16 lg:m-32 mx-10"
              />
            )}
            {(!posts || posts.length < 1) && !loading && !user?.isPrivate && (
              <PageStatus
                title={t("status.noPosts.title")}
                description={t("status.noPosts.description")}
                icon={<PhotographIcon strokeWidth="1" className="w-12" />}
                className="mt-16 lg:m-32 mx-10"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
