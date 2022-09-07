import { useTranslation } from "react-i18next";
import { useNavigator } from "@hooks/useNavigator";
import { formatCountTitle } from "@utils/formatter";
import type { UseProfileInfo } from "../ProfileInfo.types";

export function useProfileInfo(props: UseProfileInfo) {
  const { user } = props;
  const {
    formatFollowingPageRoute,
    formatFollowersPageRoute,
    formatProfilePageRoute,
  } = useNavigator();
  const { t } = useTranslation(["profile", "common"]);

  // TODO: refactor this counts
  const COUNTS = [
    {
      ...formatCountTitle({
        singular: t("common:post"),
        plural: t("common:posts"),
        count: user?.postsCount,
      }),
      href: user && formatProfilePageRoute(user?.username),
    },
    {
      ...formatCountTitle({
        singular: t("common:follower"),
        plural: t("common:followers"),
        count: user?.followersCount,
      }),
      href: user && formatFollowersPageRoute(user.username),
    },
    {
      ...formatCountTitle({
        singular: t("common:following"),
        plural: t("common:following"),
        count: user?.followingCount,
      }),
      href: user && formatFollowingPageRoute(user.username),
    },
  ];

  return {
    COUNTS,
  };
}
