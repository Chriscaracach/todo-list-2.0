import { createContext, useContext } from "react";
import { useFirebaseAuth } from "../../firebase/auth/use_firebase_auth";

export const AuthContext = createContext({
  user: null,
});

export const AuthContextProvider = ({ children }) => {
  const auth = useFirebaseAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  useContext(AuthContext);
};
