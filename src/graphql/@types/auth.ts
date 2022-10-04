import type { User } from "@t/user";

export interface AuthToken {
  token: string;
  expiredAt: string;
}

export interface AuthResponse {
  user: User;
  authToken: AuthToken;
}

export interface LoginQuery {
  login: AuthResponse;
}

export interface RegisterMutation {
  register: AuthResponse;
}

export interface RegisterMutationRequest {
  fullName: string;
  email: string;
  password: string;
  invitationCode?: string;
}

export interface OAuthGoogleMutation {
  oAuthGoogle: AuthResponse;
}

export interface OAuthGoogleMutationRequest {
  credential: string;
  invitationCode?: string;
}
