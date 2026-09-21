import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";

export type TextSize = "normal" | "large" | "xlarge";

interface AccessibilityContextType {
  isSeniorMode: boolean;
  textSize: TextSize;
  highContrast: boolean;
  speechRate: number;
  isSpeaking: boolean;
  toggleSeniorMode: (forceState?: boolean) => void;
  setTextSize: (size: TextSize) => void;
  setHighContrast: (enabled: boolean) => void;
  setSpeechRate: (rate: number) => void;
  speakText: (text: string, langCode?: string) => void;
  stopSpeaking: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType>({
  isSeniorMode: false,
  textSize: "normal",
  highContrast: false,
  speechRate: 1.0,
  isSpeaking: false,
  toggleSeniorMode: () => {},
  setTextSize: () => {},
  setHighContrast: () => {},
  setSpeechRate: () => {},
  speakText: () => {},
  stopSpeaking: () => {},
});

const STORAGE_KEY_SENIOR = "citylens_senior_mode";
const STORAGE_KEY_TEXT_SIZE = "citylens_text_size";
const STORAGE_KEY_CONTRAST = "citylens_high_contrast";
const STORAGE_KEY_SPEECH_RATE = "citylens_speech_rate";

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSeniorMode, setIsSeniorModeState] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY_SENIOR) === "true";
    } catch {
      return false;
    }
  });

  const [textSize, setTextSizeState] = useState<TextSize>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_TEXT_SIZE);
      if (saved === "normal" || saved === "large" || saved === "xlarge") {
        return saved;
      }
    } catch {}
    // If senior mode was previously turned on, default to large text
    try {
      if (localStorage.getItem(STORAGE_KEY_SENIOR) === "true") return "large";
    } catch {}
    return "normal";
  });

  const [highContrast, setHighContrastState] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_CONTRAST);
      if (saved !== null) return saved === "true";
      return localStorage.getItem(STORAGE_KEY_SENIOR) === "true";
    } catch {
      return false;
    }
  });

  const [speechRate, setSpeechRateState] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SPEECH_RATE);
      if (saved) {
        const parsed = parseFloat(saved);
        if (!isNaN(parsed) && parsed >= 0.7 && parsed <= 1.5) return parsed;
      }
      return localStorage.getItem(STORAGE_KEY_SENIOR) === "true" ? 0.85 : 1.0;
    } catch {
      return 1.0;
    }
  });

  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const activeUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Apply CSS classes to document root for global styling
  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;

    if (isSeniorMode) {
      root.classList.add("senior-friendly-active");
    } else {
      root.classList.remove("senior-friendly-active");
    }

    root.classList.remove("text-size-normal", "text-size-large", "text-size-xlarge");
    root.classList.add(`text-size-${textSize}`);

    if (highContrast) {
      root.classList.add("high-contrast-active");
    } else {
      root.classList.remove("high-contrast-active");
    }
  }, [isSeniorMode, textSize, highContrast]);

  const toggleSeniorMode = useCallback((forceState?: boolean) => {
    setIsSeniorModeState((prev) => {
      const next = forceState !== undefined ? forceState : !prev;
      try {
        localStorage.setItem(STORAGE_KEY_SENIOR, String(next));
      } catch {}

      if (next) {
        // Automatically optimize parameters for senior accessibility
        setTextSizeState("large");
        setHighContrastState(true);
        setSpeechRateState(0.85);
        try {
          localStorage.setItem(STORAGE_KEY_TEXT_SIZE, "large");
          localStorage.setItem(STORAGE_KEY_CONTRAST, "true");
          localStorage.setItem(STORAGE_KEY_SPEECH_RATE, "0.85");
        } catch {}
      } else {
        setTextSizeState("normal");
        setHighContrastState(false);
        setSpeechRateState(1.0);
        try {
          localStorage.setItem(STORAGE_KEY_TEXT_SIZE, "normal");
          localStorage.setItem(STORAGE_KEY_CONTRAST, "false");
          localStorage.setItem(STORAGE_KEY_SPEECH_RATE, "1.0");
        } catch {}
      }
      return next;
    });
  }, []);

  const setTextSize = useCallback((size: TextSize) => {
    setTextSizeState(size);
    try {
      localStorage.setItem(STORAGE_KEY_TEXT_SIZE, size);
    } catch {}
  }, []);

  const setHighContrast = useCallback((enabled: boolean) => {
    setHighContrastState(enabled);
    try {
      localStorage.setItem(STORAGE_KEY_CONTRAST, String(enabled));
    } catch {}
  }, []);

  const setSpeechRate = useCallback((rate: number) => {
    setSpeechRateState(rate);
    try {
      localStorage.setItem(STORAGE_KEY_SPEECH_RATE, String(rate));
    } catch {}
  }, []);

  const stopSpeaking = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    activeUtteranceRef.current = null;
  }, []);

  const speakText = useCallback(
    (text: string, langCode: string = "en") => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) {
        console.warn("Speech synthesis not available in this environment.");
        return;
      }

      window.speechSynthesis.cancel();

      if (!text || text.trim().length === 0) {
        setIsSpeaking(false);
        return;
      }

      // Clean text of markdown or hashtags
      const cleanText = text
        .replace(/[#*_~`]/g, "")
        .replace(/https?:\/\/[^\s]+/g, "")
        .trim();

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = isSeniorMode ? Math.min(speechRate, 0.85) : speechRate;
      utterance.pitch = 1.0;

      // Map language code to BCP 47 tag
      const bcp47Map: Record<string, string> = {
        en: "en-US",
        es: "es-ES",
        fr: "fr-FR",
        de: "de-DE",
        it: "it-IT",
        pt: "pt-PT",
        hi: "hi-IN",
        "zh-CN": "zh-CN",
        "zh-TW": "zh-TW",
        ja: "ja-JP",
        ko: "ko-KR",
        ar: "ar-SA",
        ru: "ru-RU",
      };
      utterance.lang = bcp47Map[langCode] || langCode;

      utterance.onstart = () => {
        setIsSpeaking(true);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        activeUtteranceRef.current = null;
      };

      utterance.onerror = (e) => {
        console.warn("Speech synthesis notice:", e);
        setIsSpeaking(false);
        activeUtteranceRef.current = null;
      };

      activeUtteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    [isSeniorMode, speechRate]
  );

  return (
    <AccessibilityContext.Provider
      value={{
        isSeniorMode,
        textSize,
        highContrast,
        speechRate,
        isSpeaking,
        toggleSeniorMode,
        setTextSize,
        setHighContrast,
        setSpeechRate,
        speakText,
        stopSpeaking,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => useContext(AccessibilityContext);
