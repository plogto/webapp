import { isWindowExists } from ".";
import { LocalStorageKeys } from "@enums";

export function getToken() {
  const token =
    isWindowExists() && localStorage.getItem(LocalStorageKeys.AUTHORIZATION);

  return token || undefined;
}

export function getInvitationCode() {
  const invitationCode =
    isWindowExists() && localStorage.getItem(LocalStorageKeys.INVITATION_CODE);

  return invitationCode || undefined;
}
