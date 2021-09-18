import { useProfile } from "./hooks/useProfile";
import { useAccountContext } from "@context/AccountContext";
import { Header, NotFound } from "./components";
import { Posts } from "@components/Posts";
import { PageStatus } from "@components/PageStatus";
import { LockClosedIcon } from "@heroicons/react/solid";
import { PhotographIcon } from "@heroicons/react/outline";
import { useTranslation } from "react-i18next";
import { Wrapper } from "@components/Wrapper";

export function Profile() {
  const { user: userAccount } = useAccountContext();
  const { getUserByUsernameResponse, user, posts } = useProfile();
  const { loading } = getUserByUsernameResponse;
  const { t } = useTranslation("profile");

  return (
    <Wrapper>
      {getUserByUsernameResponse.error?.message ? (
        <NotFound />
      ) : (
        <>
          {/* TODO: move classnames to css file */}
          <div className="w-full h-screen">
            {user && <Header {...user} />}
            {posts && posts?.length > 0 && <Posts posts={posts} />}
            {/* TODO: refactor conditions */}
            {(!posts || posts.length < 1) &&
              !loading &&
              user?.id !== userAccount?.id &&
              user?.isPrivate && (
                <PageStatus
                  title={t("status.private.title")}
                  description={t("status.private.description")}
                  icon={<LockClosedIcon strokeWidth="1" className="w-12" />}
                  className="mt-16 lg:m-32 mx-10"
                />
              )}
            {(!posts || posts.length < 1) &&
              !loading &&
              (!user?.isPrivate || user?.id == userAccount?.id) && (
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
    </Wrapper>
  );
}
