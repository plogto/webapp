import { useAuth } from "@hooks/useAuth";
import { useInitThemes } from "./hooks/useInitThemes";
import { usePushNotification } from "./hooks/usePushNotifications";

export function AppInit() {
  useInitThemes();
  usePushNotification();
  useAuth();

  return null;
}
