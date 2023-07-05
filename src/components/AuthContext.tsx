import { createContext, useState, useContext, ReactNode } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

interface AuthContextProps {
  user: any;
  login: (value: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: () => null,
  logout: () => null,
});

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  const [value, setValue] = useLocalStorage("user", null);

  // Fonction pour connecter l'utilisateur
  const login = (value: any) => {
    setValue(value);
    setUser(value);
  };

  // Fonction pour déconnecter l'utilisateur
  const logout = () => {
    setValue(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
