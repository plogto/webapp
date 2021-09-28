import { createContext, ReactNode, useContext, useState } from "react";

const token =
  typeof window !== "undefined"
    ? localStorage.getItem("Authorization")
    : undefined;

const initialAccount: AccountContext = {
  isAuthenticated: !!token,
  token: token || undefined,
};

const AccountContext = createContext<AccountContext>(initialAccount);
const AccountContextSetState = createContext<SetAccountContext>({
  setIsAutheticated: () => {},
  setToken: () => {},
  setUser: () => {},
});

type Props = {
  children: ReactNode;
};
export function AccountProvider({ children }: Props) {
  const [isAuthenticatedState, setIsAuthenticatedState] = useState<
    AccountContext["isAuthenticated"]
  >(initialAccount.isAuthenticated);
  const [tokenState, setTokenState] = useState<AccountContext["token"]>(
    initialAccount.token,
  );
  const [userState, setUserState] = useState<AccountContext["user"]>(
    initialAccount.user,
  );

  return (
    <AccountContext.Provider
      value={{
        isAuthenticated: isAuthenticatedState,
        token: tokenState,
        user: userState,
      }}
    >
      <AccountContextSetState.Provider
        value={{
          setIsAutheticated: setIsAuthenticatedState,
          setToken: setTokenState,
          setUser: setUserState,
        }}
      >
        {children}
      </AccountContextSetState.Provider>
    </AccountContext.Provider>
  );
}

function useAccountState() {
  const { isAuthenticated, token, user } = useContext(AccountContext);

  return { isAuthenticated, token, user };
}

function useAccountSetState() {
  const { setIsAutheticated, setToken, setUser } = useContext(
    AccountContextSetState,
  );

  return { setIsAutheticated, setToken, setUser };
}

export function useAccountContext() {
  const { isAuthenticated, token, user } = useAccountState();
  const { setIsAutheticated, setToken, setUser } = useAccountSetState();

  return { isAuthenticated, token, user, setIsAutheticated, setToken, setUser };
}
