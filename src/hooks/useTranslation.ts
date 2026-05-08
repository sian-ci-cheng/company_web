import { useLanguageContext } from "@/contexts/LanguageContext";
import type { TranslationKeys } from "@/types/translations";

export function useTranslation(): TranslationKeys {
  const { language, translations } = useLanguageContext();
  return translations[language];
}
