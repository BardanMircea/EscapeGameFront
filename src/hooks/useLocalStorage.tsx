import { useState, useEffect } from "react";

export interface LocalStorageProps {
  name: string;
  email: string;
  mdp: string;
}

const useLocalStorage = (
  key: string,
  initialValue: LocalStorageProps | null
) => {
  const [value, setValue] = useState(() => {
    // Vérifier si une valeur existe déjà dans le localStorage pour la clé donnée
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    // Sauvegarder la valeur dans le localStorage à chaque fois qu'elle est mise à jour
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
