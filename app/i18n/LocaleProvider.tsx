"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import ptTranslations from "../../locales/pt.json";
import enTranslations from "../../locales/en.json";

type Locale = "en" | "pt";

type Translations = typeof import("../../locales/pt.json");

const translationsMap: Record<Locale, Translations> = {
  pt: ptTranslations,
  en: enTranslations,
};

type TContext = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: <T = string>(path: string) => T; // Adicionado suporte a tipos genéricos
};

const LocaleContext = createContext<TContext | null>(null);

const getInitialLocale = (): Locale => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("locale") as Locale;
    if (saved === "pt" || saved === "en") {
      return saved;
    }
    const nav = navigator.language;
    return nav.startsWith("pt") ? "pt" : "en";
  }
  return "pt"; // Fallback para 'pt' no lado do servidor
};

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  const t = useMemo(() => {
    const get = <T = string,>(path: string): T => {
      const parts = path.split(".");
      let cur: unknown = translationsMap[locale];
      for (const p of parts) {
        if (typeof cur !== "object" || cur === null || !(p in cur)) {
          return path as T; // Retorna o caminho como fallback
        }
        cur = (cur as Record<string, unknown>)[p];
      }
      return cur as T; // Retorna o valor encontrado como o tipo genérico
    };

    return get;
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}

export default LocaleProvider;
