"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Default to 'light' (Bright Mode) as requested
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem("sfvour-theme") as Theme | null;
      if (storedTheme === "dark") {
        setThemeState("dark");
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      } else {
        // Explicit default: bright / light mode
        setThemeState("light");
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");
      }
    } catch {
      setThemeState("light");
      document.documentElement.classList.add("light");
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem("sfvour-theme", newTheme);
    } catch {}

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
