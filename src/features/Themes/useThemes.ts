import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "next-themes";
import { PrimaryColor, BackgroundColor } from "@enums";
import { useMutation } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import type { EditUserMutation } from "@graphql/@types/user";
import { EDIT_USER, GET_USER_INFO } from "@graphql/user";

export function useThemes() {
  const { user } = useAccountContext();
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation("themes");
  const [mounted, setMounted] = useState(false);
  const [primaryColor, setPrimaryColor] = useState(user?.primaryColor);
  const [backgroundColor, setBackgroundColor] = useState(user?.backgroundColor);
  const [editUser] = useMutation<EditUserMutation>(EDIT_USER);

  useEffect(() => {
    const theme = `${backgroundColor}-${primaryColor}`;
    setTheme(theme);
    editUser({
      variables: {
        backgroundColor,
        primaryColor,
      },
      refetchQueries: [{ query: GET_USER_INFO }],
    });
  }, [editUser, primaryColor, setTheme, backgroundColor]);

  const COLORS = [
    {
      key: PrimaryColor.BLUE,
      onClick: () => setPrimaryColor(PrimaryColor.BLUE),
      className: "bg-sky-500",
    },
    {
      key: PrimaryColor.GREEN,
      onClick: () => setPrimaryColor(PrimaryColor.GREEN),
      className: "bg-emerald-500",
    },
    {
      key: PrimaryColor.RED,
      onClick: () => setPrimaryColor(PrimaryColor.RED),
      className: "bg-rose-500",
    },
    {
      key: PrimaryColor.PURPLE,
      onClick: () => setPrimaryColor(PrimaryColor.PURPLE),
      className: "bg-indigo-500",
    },
    {
      key: PrimaryColor.ORANGE,
      onClick: () => setPrimaryColor(PrimaryColor.ORANGE),
      className: "bg-orange-500",
    },
    {
      key: PrimaryColor.YELLOW,
      onClick: () => setPrimaryColor(PrimaryColor.YELLOW),
      className: "bg-amber-400",
    },
  ];

  const THEMES = [
    {
      key: BackgroundColor.LIGHT,
      title: t("buttons.light"),
      onClick: () => setBackgroundColor(BackgroundColor.LIGHT),
      className: "bg-white text-black",
    },
    {
      key: BackgroundColor.DIM,
      title: t("buttons.dim"),
      onClick: () => setBackgroundColor(BackgroundColor.DIM),
      className: "bg-gray-800 text-white",
    },
    {
      key: BackgroundColor.DARK,
      title: t("buttons.dark"),
      onClick: () => setBackgroundColor(BackgroundColor.DARK),
      className: "bg-black text-white",
    },
  ];

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return {
    user,
    mounted,
    theme,
    backgroundColor,
    primaryColor,
    COLORS,
    THEMES,
  };
}
