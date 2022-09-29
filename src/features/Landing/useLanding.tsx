import { useRouter } from "next/router";
import { LocalStorageKeys } from "@enums";

export function useLanding() {
  const { query } = useRouter();
  const invitationCode = query.invitation_code as string;

  invitationCode &&
    localStorage.setItem(LocalStorageKeys.INVITATION_CODE, invitationCode);
}
