import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAccountContext } from "@context/AccountContext";
import { PageUrls } from "@enums/pages";

export function useLogout() {
  const router = useRouter();
  const { setIsAutheticated, setToken, setUser } = useAccountContext();

  useEffect(() => {
    setIsAutheticated(false);
    setToken(undefined);
    setUser(undefined);
    typeof window !== "undefined"
      ? localStorage.removeItem("Authorization")
      : undefined;
    router.push(PageUrls.LOGIN);
  }, [setIsAutheticated, setToken, setUser]);
}
