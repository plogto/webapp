import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigator } from "@hooks/useNavigator";
import { useUserProfile } from "@hooks/useUserProfile";
import { formatCountTitle } from "@utils/formatter";

export function useProfileInfo() {
  const { userResponse } = useUserProfile();
  const {
    formatFollowingPageRoute,
    formatFollowersPageRoute,
    formatProfilePageRoute,
  } = useNavigator();
  const { t } = useTranslation(["profile", "common"]);

  const userData = useMemo(
    () => userResponse.data?.getUserByUsername,
    [userResponse.data?.getUserByUsername],
  );

  // TODO: refactor this counts
  const COUNTS = [
    {
      ...formatCountTitle({
        singular: t("common:post"),
        plural: t("common:posts"),
        count: userData?.postsCount,
      }),
      href: userData && formatProfilePageRoute(userData?.username),
    },
    {
      ...formatCountTitle({
        singular: t("common:follower"),
        plural: t("common:followers"),
        count: userData?.followersCount,
      }),
      href: userData && formatFollowersPageRoute(userData.username),
    },
    {
      ...formatCountTitle({
        singular: t("common:following"),
        plural: t("common:following"),
        count: userData?.followingCount,
      }),
      href: userData && formatFollowingPageRoute(userData.username),
    },
  ];

  return {
    COUNTS,
  };
}
