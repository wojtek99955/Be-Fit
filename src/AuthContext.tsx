import React, { ReactNode } from "react";
import { useContext, useState, useEffect } from "react";
import { auth } from "./firebase";

interface Props {
  children: ReactNode;
}

export function useAuth() {
  return useContext(AuthContext);
}

interface ContextType {
  currentUser: any;
  cos: string;
}

export const AuthContext = React.createContext<ContextType | null>(null);
const cos = "cos";

export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<any>({});
  console.log(currentUser);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, cos }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
