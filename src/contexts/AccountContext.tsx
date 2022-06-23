import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { useRouter } from "next/router";

const token =
  typeof window !== "undefined"
    ? localStorage.getItem("authorization")
    : undefined;

const initialAccount: AccountContext = {
  isAuthenticated: !!token,
  token: token || undefined,
};

const AccountContext = createContext<AccountContext>(initialAccount);
const AccountContextSetState = createContext<SetAccountContext>({
  setIsAuthenticated: () => {},
  setToken: () => {},
  setUser: () => {},
});

interface Props {
  children: ReactNode;
}
export function AccountProvider({ children }: Props) {
  const [isAuthenticated, setIsAuthenticated] = useState<
    AccountContext["isAuthenticated"]
  >(initialAccount.isAuthenticated);
  const [token, setToken] = useState<AccountContext["token"]>(
    initialAccount.token,
  );
  const [user, setUser] = useState<AccountContext["user"]>(initialAccount.user);

  return (
    <AccountContext.Provider
      value={{
        isAuthenticated,
        token,
        user,
      }}
    >
      <AccountContextSetState.Provider
        value={{
          setIsAuthenticated,
          setToken,
          setUser,
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
  const { setIsAuthenticated, setToken, setUser } = useContext(
    AccountContextSetState,
  );

  return { setIsAuthenticated, setToken, setUser };
}

export function useAccountContext() {
  const { isAuthenticated, token, user } = useAccountState();
  const { setIsAuthenticated, setToken, setUser } = useAccountSetState();
  const { query } = useRouter();
  const username = query?.username as string;

  const isYourAccount = useMemo(
    () => username === user?.username,
    [user?.username, username],
  );

  return {
    isYourAccount,
    isAuthenticated,
    token,
    user,
    setIsAuthenticated,
    setToken,
    setUser,
  };
}
