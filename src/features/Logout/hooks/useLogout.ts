import { PageUrls } from "@/@enums/pages";
import { useAccount } from "@/context/AccountContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function useLogout() {
  const router = useRouter();
  const { setIsAutheticated, setToken, setUser } = useAccount();

  useEffect(() => {
    setIsAutheticated(false);
    setToken(undefined);
    setUser(undefined);
    typeof window !== "undefined"
      ? localStorage.removeItem("Authorization")
      : undefined;
    router.push(PageUrls.LOGIN);
  }, []);
}
