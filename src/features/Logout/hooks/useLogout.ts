import { useEffect } from "react";
import { useRouter } from "next/router";
import { LocalStorageKeys } from "@enums";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import { useApollo } from "@lib/apolloClient";

export function useLogout() {
  const { push } = useRouter();
  const { setIsAuthenticated, setToken, setUser } = useAccountContext();
  const apolloClient = useApollo({});

  useEffect(() => {
    setIsAuthenticated(false);
    setToken(undefined);
    setUser(undefined);
    apolloClient.cache.reset();
    typeof window !== "undefined"
      ? localStorage.removeItem(LocalStorageKeys.AUTHORIZATION)
      : undefined;
    push(PageUrls.LOGIN);
  }, [apolloClient.cache, setIsAuthenticated, setToken, setUser]);
}
