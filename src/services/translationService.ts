import { defaultTranslations } from "@/constants/translations";
import { parseCSV } from "./csvParser";
import type { Translations } from "@/types/translations";

let cachedTranslations: Translations = defaultTranslations;
let csvLoaded = false;

export async function loadTranslations(): Promise<Translations> {
  if (csvLoaded) return cachedTranslations;

  try {
    const response = await fetch('./content.csv');
    const csv = await response.text();
    const parsed = parseCSV(csv);
    cachedTranslations = {
      en: { ...defaultTranslations.en, ...parsed.en } as Translations['en'],
      zh: { ...defaultTranslations.zh, ...parsed.zh } as Translations['zh']
    };
    csvLoaded = true;
  } catch (e) {
    console.warn('Failed to load CSV translations, using defaults', e);
  }
  return cachedTranslations;
}

export function getTranslations(): Translations {
  return cachedTranslations;
}

