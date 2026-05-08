import { createContext, useContext, useState, useEffect } from "react";
import { defaultTranslations } from "@/constants/translations";
import { loadTranslations } from "@/services/translationService";
import type { Translations } from "@/types/translations";

interface LanguageContextType {
  language: 'en' | 'zh';
  translations: Translations;
  setLanguage: (lang: 'en' | 'zh') => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  const [translations, setTranslations] = useState<Translations>(defaultTranslations);

  useEffect(() => {
    loadTranslations().then(setTranslations);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, translations, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext must be used within LanguageProvider');
  }
  return context;
}
