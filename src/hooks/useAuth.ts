export function useAuth() {
  function getToken() {
    const token = localStorage.getItem("authorization");
    return token;
  }
  return { getToken };
}
