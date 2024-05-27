"use client";
import { createContext, PropsWithChildren, useContext, useState } from "react";

interface ThemeContextType {
  currentTheme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within an ThemeProvider");
  }
  return context;
};

export default ThemeContext;
