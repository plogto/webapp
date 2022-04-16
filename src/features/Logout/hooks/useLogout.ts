import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";

export function useLogout() {
  const { push } = useRouter();
  const { setIsAuthenticated, setToken, setUser } = useAccountContext();

  useEffect(() => {
    setIsAuthenticated(false);
    setToken(undefined);
    setUser(undefined);
    typeof window !== "undefined"
      ? localStorage.removeItem("authorization")
      : undefined;
    push(PageUrls.LOGIN);
  }, [setIsAuthenticated, setToken, setUser]);
}
