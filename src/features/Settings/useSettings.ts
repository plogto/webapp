import { useAccountContext } from "@contexts/AccountContext";

export function useSettings() {
  const { user } = useAccountContext();

  return { user };
}
