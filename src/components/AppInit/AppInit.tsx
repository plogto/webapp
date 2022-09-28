import { useAccountContext } from "@contexts/AccountContext";
import { useAuthentication } from "./hooks/useAuthentication";
import { useInitThemes } from "./hooks/useInitThemes";
import { usePushNotification } from "./hooks/usePushNotifications";

export function AppInit() {
  const { user, setUser } = useAccountContext();

  useInitThemes({ user });
  usePushNotification();
  useAuthentication({ setUser });

  return <></>;
}
