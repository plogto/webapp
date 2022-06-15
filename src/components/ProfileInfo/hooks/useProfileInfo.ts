import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useUserProfile } from "@hooks/useUserProfile";
import { formatCountTitle } from "@utils/formatter";

export function useProfileInfo() {
  const { userResponse } = useUserProfile();
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
    },
    {
      ...formatCountTitle({
        singular: t("common:follower"),
        plural: t("common:followers"),
        count: userData?.followersCount,
      }),
      href: `${userData?.username}/followers`,
    },
    {
      ...formatCountTitle({
        singular: t("common:following"),
        plural: t("common:following"),
        count: userData?.followingCount,
      }),
      href: `${userData?.username}/following`,
    },
  ];

  return {
    COUNTS,
  };
}
