import { useEffect } from "react";
import { useTheme } from "next-themes";
import { useAccountContext } from "@contexts/AccountContext";

export function useInitThemes() {
  const { user } = useAccountContext();
  const { setTheme } = useTheme();

  useEffect(() => {
    if (user) {
      const theme = `${user?.backgroundColor}-${user?.primaryColor}`;
      setTheme(theme);
    }
  }, [setTheme, user]);
}
