import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import useLocalStorage from "../hooks/useLocalStorage";

interface AuthContextProps {
  user: any;
  login: (value: any) => void;
  logout: () => void;
}

// Création du contexte d'authentification avec des valeurs par défaut
const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: () => null,
  logout: () => null,
});

// Hook personnalisé pour accéder au contexte d'authentification
export function useAuth() {
  return useContext(AuthContext);
}

// Composant fournissant le contexte d'authentification aux composants enfants
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  const [value, setValue] = useLocalStorage("user", null);

  // Verifier la presence d'un utilisateur dans le local storage lors de la premiere arriver dans le site
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

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
