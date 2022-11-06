import { useEffect } from "react";
import { useRouter } from "next/router";
import { LocalStorageKeys } from "@enums";
import { isWindowExists } from "@utils";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";

export function useLogout() {
  const { push } = useRouter();
  const { isAuthenticated, setIsAuthenticated, setToken, setUser } =
    useAccountContext();

  useEffect(() => {
    setIsAuthenticated(false);
    setToken(undefined);
    setUser(undefined);
    isWindowExists() && localStorage.removeItem(LocalStorageKeys.AUTHORIZATION);
    if (isAuthenticated) {
      window.location.reload();
    }
    push(PageUrls.LOGIN);
  }, [setIsAuthenticated, setToken, setUser]);
}
