import { createContext, useState } from "react";

export interface DarkModeContextType {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
interface ContextType {
  children: React.ReactNode;
}
export const darkModeContext = createContext<DarkModeContextType | null>(null);

export const DarkModeContextProvider = ({ children }: ContextType) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <darkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </darkModeContext.Provider>
  );
};
