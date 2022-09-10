import { LocalStorageKeys } from "@enums";

export function useAuth() {
  function getToken() {
    const token = localStorage.getItem(LocalStorageKeys.AUTHORIZATION);
    return token;
  }
  return { getToken };
}
