import { useRouter } from "next/router";

export function useLanding() {
  const { query } = useRouter();
  const invitationCode = query.invitation_code as string;

  invitationCode && localStorage.setItem("invitationCode", invitationCode);
}
