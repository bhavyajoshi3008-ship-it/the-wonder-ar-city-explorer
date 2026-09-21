import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { WORLD_LANGUAGES, CORE_TRANSLATIONS, LanguageOption } from "../data/languages";
import { translateUIBatch } from "../services/api";

export const DEFAULT_ENGLISH_LANGUAGE: LanguageOption =
  WORLD_LANGUAGES.find((l) => l.code === "en") || WORLD_LANGUAGES[0];

interface LanguageContextType {
  currentLanguage: LanguageOption;
  setLanguage: (lang: LanguageOption) => void;
  resetToEnglish: () => void;
  t: (key: string, defaultVal?: string) => string;
  isTranslatingUI: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: DEFAULT_ENGLISH_LANGUAGE,
  setLanguage: () => {},
  resetToEnglish: () => {},
  t: (key: string, defaultVal?: string) => defaultVal || key,
  isTranslatingUI: false,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<LanguageOption>(() => {
    try {
      // Honors user's last changed language
      const savedCode = localStorage.getItem("citylens_selected_language");
      if (savedCode) {
        const found = WORLD_LANGUAGES.find((l) => l.code === savedCode);
        if (found) return found;
      }
    } catch {}
    // Defaults strictly to English
    return DEFAULT_ENGLISH_LANGUAGE;
  });

  const [dynamicTranslations, setDynamicTranslations] = useState<Record<string, Record<string, string>>>(() => {
    const initial: Record<string, Record<string, string>> = {};
    if (typeof window !== "undefined") {
      try {
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && key.startsWith("citylens_ui_translations_")) {
            const langCode = key.replace("citylens_ui_translations_", "");
            const parsed = JSON.parse(localStorage.getItem(key) || "{}");
            initial[langCode] = parsed;
          }
        }
      } catch {}
    }
    return initial;
  });

  const [isTranslatingUI, setIsTranslatingUI] = useState(false);
  const fetchingLangsRef = useRef<Set<string>>(new Set());

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
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dir = currentLanguage.dir || "ltr";
      document.documentElement.lang = currentLanguage.code;
    }

    if (currentLanguage.code === "en") return;

    // Check if we need to fetch dynamic translations for any missing keys
    const langCode = currentLanguage.code;
    const existingDynamic = dynamicTranslations[langCode] || {};
    
    // Check which keys are missing
    const missingKeysMap: Record<string, string> = {};
    Object.keys(CORE_TRANSLATIONS).forEach((k) => {
      const hasStatic = Boolean(CORE_TRANSLATIONS[k]?.[langCode] || CORE_TRANSLATIONS[k]?.[langCode.split("-")[0]]);
      const hasDynamic = Boolean(existingDynamic[k]);
      if (!hasStatic && !hasDynamic) {
        missingKeysMap[k] = CORE_TRANSLATIONS[k]?.["en"] || k;
      }
    });

    if (Object.keys(missingKeysMap).length > 0 && !fetchingLangsRef.current.has(langCode)) {
      fetchingLangsRef.current.add(langCode);
      setIsTranslatingUI(true);

      translateUIBatch(missingKeysMap, currentLanguage.code, currentLanguage.name)
        .then((translatedMap) => {
          if (translatedMap && Object.keys(translatedMap).length > 0) {
            setDynamicTranslations((prev) => {
              const updated = {
                ...prev,
                [langCode]: {
                  ...(prev[langCode] || {}),
                  ...translatedMap,
                },
              };
              try {
                localStorage.setItem(`citylens_ui_translations_${langCode}`, JSON.stringify(updated[langCode]));
              } catch {}
              return updated;
            });
          }
        })
        .catch((err) => {
          console.warn(`Dynamic UI translation notice for ${currentLanguage.name}:`, err);
        })
        .finally(() => {
          fetchingLangsRef.current.delete(langCode);
          setIsTranslatingUI(false);
        });
    }
  }, [currentLanguage, dynamicTranslations]);

  const t = (key: string, defaultVal?: string): string => {
    const langCode = currentLanguage.code;

    // 1. Check dynamic runtime translations first
    if (dynamicTranslations[langCode]?.[key]) {
      return dynamicTranslations[langCode][key];
    }

    // 2. Check static translations
    const entry = CORE_TRANSLATIONS[key];
    if (entry) {
      if (entry[langCode]) {
        return entry[langCode];
      }

      // Check base language if e.g. zh-CN -> zh
      const baseCode = langCode.split("-")[0];
      if (entry[baseCode]) {
        return entry[baseCode];
      }

      if (entry["en"]) {
        return entry["en"];
      }
    }

    return defaultVal || key;
  };

  const resetToEnglish = () => {
    setLanguage(DEFAULT_ENGLISH_LANGUAGE);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, resetToEnglish, t, isTranslatingUI }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
