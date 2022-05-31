import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useTagContext } from "@contexts/TagContext";
import { useNavigator } from "@hooks/useNavigator";
import type { Tab } from "./Tag.types";

export function useTag() {
  const { t } = useTranslation("tag");
  const { formatTagPageRoute } = useNavigator();
  const { tagName, tagData, posts, getMoreData } = useTagContext();

  const TABS = useMemo(() => {
    const tabs: Tab[] = [
      {
        title: t("tabs.posts"),
        href: formatTagPageRoute(tagName),
        data: posts,
        getMoreData,
        emptyStatus: {
          title: t("status.noPosts.title"),
          description: t("status.noPosts.description"),
          icon: "Photo",
        },
      },
    ];

    return tabs;
  }, [formatTagPageRoute, getMoreData, posts, t, tagName]);

  return { tagData, TABS, t };
}
