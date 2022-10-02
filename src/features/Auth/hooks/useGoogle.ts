import { useEffect } from "react";
import { useRouter } from "next/router";
import type { CredentialResponse } from "google-one-tap";
import { useMutation } from "@apollo/client";
import { PageUrls } from "@enums/pages";
import type {
  OAuthGoogleMutation,
  OAuthGoogleMutationRequest,
} from "@graphql/@types/auth";
import { O_AUTH_GOOGLE } from "@graphql/auth";
import { useAuth } from "@hooks/useAuth";
import { useInvitation } from "./useInvitation";

export function useGoogle() {
  const { push } = useRouter();
  const { invitationCode } = useInvitation();
  const { handleToken } = useAuth();

  const [oAuthGoogle, { loading: oAuthGoogleLoading }] = useMutation<
    OAuthGoogleMutation,
    OAuthGoogleMutationRequest
  >(O_AUTH_GOOGLE);

  useEffect(() => {
    process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID &&
      google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID,
        callback: (res: CredentialResponse) => {
          oAuthGoogle({
            variables: { credential: res.credential, invitationCode },
          }).then(({ data }) => {
            if (data?.oAuthGoogle) {
              const {
                authToken: { token },
              } = data.oAuthGoogle;
              token && handleToken(token);
              push(PageUrls.HOME);
            }
          });
        },
      });

    const googleButton = document.getElementById("googleButton");

    googleButton &&
      google.accounts.id.renderButton(googleButton, {
        type: "icon",
        size: "large",
      });
  }, [handleToken, invitationCode, oAuthGoogle]);

  return { oAuthGoogleLoading };
}
