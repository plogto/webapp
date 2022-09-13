import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import type {
  GetUserByInvitationCodeQuery,
  GetUserByInvitationCodeQueryRequest,
} from "@graphql/@types/user";
import { GET_USER_BY_INVITATION_CODE } from "@graphql/user";
import type { User } from "@t/user";

export function useInvitation() {
  const [inviterUser, setInviterUser] = useState<User>();
  const [getUserByInvitationCode] = useLazyQuery<
    GetUserByInvitationCodeQuery,
    GetUserByInvitationCodeQueryRequest
  >(GET_USER_BY_INVITATION_CODE);

  const invitationCode = localStorage.getItem("invitationCode") || undefined;

  useEffect(() => {
    if (invitationCode) {
      getUserByInvitationCode({ variables: { invitationCode } }).then(
        ({ data }) => {
          setInviterUser(data?.getUserByInvitationCode);
        },
      );
    }
  }, [getUserByInvitationCode, invitationCode]);

  return { inviterUser, invitationCode };
}
