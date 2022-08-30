import { createContext } from "react";

export const AuthContext = createContext({
  user: null,
});

export const authContextProvider = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
