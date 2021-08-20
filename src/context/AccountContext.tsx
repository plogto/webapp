import type { Account, SetAccount } from "@/@types/account";
import React, { createContext, useContext, useState, ReactNode } from "react";

const token =
  typeof window !== "undefined"
    ? localStorage.getItem("Authorization")
    : undefined;

const initialAccount: Account = {
  isAuthenticated: !!token,
  token: token || undefined,
};

const AccountContext = createContext<Account>(initialAccount);
const AccountContextSetState = createContext<SetAccount>({
  setIsAutheticated: () => {},
  setToken: () => {},
  setUser: () => {},
});

type Props = {
  children: ReactNode;
};

const AccountProvider = ({ children }: Props) => {
  const [isAuthenticatedState, setIsAuthenticatedState] = useState<
    Account["isAuthenticated"]
  >(initialAccount.isAuthenticated);
  const [tokenState, setTokenState] = useState<Account["token"]>(
    initialAccount.token,
  );
  const [userState, setUserState] = useState<Account["user"]>(
    initialAccount.user,
  );

  return (
    <AccountContext.Provider
      value={{
        isAuthenticated: isAuthenticatedState,
        token: tokenState,
        user: userState,
      }}>
      <AccountContextSetState.Provider
        value={{
          setIsAutheticated: setIsAuthenticatedState,
          setToken: setTokenState,
          setUser: setUserState,
        }}>
        {children}
      </AccountContextSetState.Provider>
    </AccountContext.Provider>
  );
};

const useAccountState = () => {
  const { isAuthenticated, token, user } = useContext(AccountContext);

  return { isAuthenticated, token, user };
};

const useAccountSetState = () => {
  const { setIsAutheticated, setToken, setUser } = useContext(
    AccountContextSetState,
  );

  return { setIsAutheticated, setToken, setUser };
};

const useAccount = () => {
  const { isAuthenticated, token, user } = useAccountState();
  const { setIsAutheticated, setToken, setUser } = useAccountSetState();

  return { isAuthenticated, token, user, setIsAutheticated, setToken, setUser };
};

export { useAccount };
export default AccountProvider;
