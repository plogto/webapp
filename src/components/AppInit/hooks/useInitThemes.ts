import { useEffect } from "react";
import { useTheme } from "next-themes";
import { UseInitThemesProps } from "../AppInit.types";

export function useInitThemes(props: UseInitThemesProps) {
  const { user } = props;
  const { setTheme } = useTheme();

  useEffect(() => {
    if (user) {
      const theme = `${user?.backgroundColor}-${user?.primaryColor}`;
      setTheme(theme);
    }
  }, [setTheme, user]);
}
