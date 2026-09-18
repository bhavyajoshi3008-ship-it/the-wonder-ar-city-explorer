import React, { createContext, useContext, useState, useEffect } from "react";
import { WORLD_LANGUAGES, CORE_TRANSLATIONS, LanguageOption } from "../data/languages";

interface LanguageContextType {
  currentLanguage: LanguageOption;
  setLanguage: (lang: LanguageOption) => void;
  t: (key: string, defaultVal?: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: WORLD_LANGUAGES[0],
  setLanguage: () => {},
  t: (key: string, defaultVal?: string) => defaultVal || key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageOption>(() => {
    try {
      const savedCode = localStorage.getItem("citylens_selected_language");
      if (savedCode) {
        const found = WORLD_LANGUAGES.find((l) => l.code === savedCode);
        if (found) return found;
      }
    } catch {}
    return WORLD_LANGUAGES[0];
  });

  const setLanguage = (lang: LanguageOption) => {
    setCurrentLanguage(lang);
    try {
      localStorage.setItem("citylens_selected_language", lang.code);
    } catch {}

    // Adjust document direction for RTL languages like Arabic, Hebrew, Urdu, Persian, Yiddish
    if (typeof document !== "undefined") {
      document.documentElement.dir = lang.dir || "ltr";
      document.documentElement.lang = lang.code;
    }

    // Trigger Google Translate widget if present on page
    if (typeof window !== "undefined") {
      try {
        const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
        if (select) {
          select.value = lang.code;
          select.dispatchEvent(new Event("change"));
        }
      } catch {}
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dir = currentLanguage.dir || "ltr";
      document.documentElement.lang = currentLanguage.code;
    }
  }, [currentLanguage]);

  const t = (key: string, defaultVal?: string): string => {
    const entry = CORE_TRANSLATIONS[key];
    if (!entry) return defaultVal || key;

    const langCode = currentLanguage.code;
    if (entry[langCode]) {
      return entry[langCode];
    }

    // Check base language if e.g. zh-CN -> zh
    const baseCode = langCode.split("-")[0];
    if (entry[baseCode]) {
      return entry[baseCode];
    }

    return entry["en"] || defaultVal || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
