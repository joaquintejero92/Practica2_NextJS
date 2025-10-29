"use client";

import { useEffect, useState } from "react";
import { themeChange } from "theme-change";

const DEFAULT_THEME = "light";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("");

  // 🔹 Mover aquí la función antes del useEffect
  const applyTheme = (theme) => {
    setTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  };

 useEffect(() => {
  themeChange(false);
  const saved = localStorage.getItem("theme");

  setTimeout(() => {
    if (saved) {
      applyTheme(saved);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const systemTheme = prefersDark ? "dark" : DEFAULT_THEME;
      applyTheme(systemTheme);
    }
  }, 0); // Espera al siguiente ciclo del event loop

  const handleStorage = (e) => {
    if (e.key === "theme" && e.newValue) applyTheme(e.newValue);
  };
  window.addEventListener("storage", handleStorage);
  return () => window.removeEventListener("storage", handleStorage);
}, []);


  return <>{children}</>;
}
