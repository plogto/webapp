import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { getToken } from "@utils/localStorage";

const token = getToken();

const initialAccount: AccountContext = {
  isAuthenticated: !!token,
  token,
};

const AccountContext = createContext<AccountContext>(initialAccount);
const AccountContextSetState = createContext<SetAccountContext>({
  setIsAuthenticated: () => {},
  setToken: () => {},
  setUser: () => {},
  setIsUserLoading: () => {},
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
  const [isUserLoading, setIsUserLoading] = useState<
    AccountContext["isUserLoading"]
  >(!!user);

  return (
    <AccountContext.Provider
      value={{
        isAuthenticated,
        token,
        user,
        isUserLoading,
      }}
    >
      <AccountContextSetState.Provider
        value={{
          setIsAuthenticated,
          setToken,
          setUser,
          setIsUserLoading,
        }}
      >
        {children}
      </AccountContextSetState.Provider>
    </AccountContext.Provider>
  );
}

export function useAccountContext() {
  const { isAuthenticated, token, user, isUserLoading } =
    useContext(AccountContext);
  const { setIsAuthenticated, setToken, setUser, setIsUserLoading } =
    useContext(AccountContextSetState);

  const isYourAccount = useCallback(
    (username?: string) => username && username === user?.username,
    [user?.username],
  );

  return {
    isYourAccount,
    isAuthenticated,
    token,
    user,
    setIsAuthenticated,
    setToken,
    setUser,
    isUserLoading,
    setIsUserLoading,
  };
}
