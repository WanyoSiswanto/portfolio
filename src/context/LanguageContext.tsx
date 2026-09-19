"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const queryLang = urlParams.get("lang") as Language | null;
      if (queryLang === "id" || queryLang === "en") {
        setLanguageState(queryLang);
        localStorage.setItem("portfolio_lang", queryLang);
        document.documentElement.lang = queryLang;
        return;
      }
    }
    const saved = localStorage.getItem("portfolio_lang") as Language | null;
    if (saved === "id" || saved === "en") {
      setLanguageState(saved);
      document.documentElement.lang = saved;
    } else {
      document.documentElement.lang = "id";
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_lang", lang);
      document.documentElement.lang = lang;
    }
  };

  const toggleLanguage = () => {
    const next = language === "id" ? "en" : "id";
    setLanguage(next);
  };

  return (
    <LanguageContext.Provider value={{ language: mounted ? language : "id", setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
