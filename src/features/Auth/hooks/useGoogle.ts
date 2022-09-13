import { useEffect } from "react";
import { useRouter } from "next/router";
import { LocalStorageKeys } from "@enums";
import type { CredentialResponse } from "google-one-tap";
import { useMutation } from "@apollo/client";
import { useAccountContext } from "@contexts/AccountContext";
import { PageUrls } from "@enums/pages";
import type {
  OAuthGoogleMutation,
  OAuthGoogleMutationRequest,
} from "@graphql/@types/auth";
import { O_AUTH_GOOGLE } from "@graphql/auth";

export function useGoogle() {
  const { push } = useRouter();
  const { setIsAuthenticated, setToken, setUser } = useAccountContext();

  const [oAuthGoogle, { loading: oAuthGoogleLoading, data }] = useMutation<
    OAuthGoogleMutation,
    OAuthGoogleMutationRequest
  >(O_AUTH_GOOGLE);

  useEffect(() => {
    process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID &&
      google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID,
        callback: (res: CredentialResponse) => {
          oAuthGoogle({ variables: { credential: res.credential } });
        },
      });

    const googleButton = document.getElementById("googleButton");

    googleButton &&
      google.accounts.id.renderButton(googleButton, {
        type: "icon",
        size: "large",
      });
  }, []);

  useEffect(() => {
    if (data?.oAuthGoogle) {
      const {
        authToken: { token },
        user,
      } = data.oAuthGoogle;
      localStorage.setItem(LocalStorageKeys.AUTHORIZATION, token);
      localStorage.removeItem(LocalStorageKeys.INVITATION_CODE);
      setToken(token);
      setUser(user);
      setIsAuthenticated(true);
      push(PageUrls.HOME);
    }
  }, [data, setToken, setUser, setIsAuthenticated]);

  return { oAuthGoogleLoading };
}
