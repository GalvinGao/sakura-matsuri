import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = Object.entries(
  import.meta.glob<true, string, Record<string, any>>("./locales/*.json", {
    eager: true,
  })
).reduce((acc, [path, module]) => {
  const lang = path.match(/\.\/locales\/(.*)\.json/)?.[1];
  if (!lang) return acc;

  acc[lang] = {
    translation: module.default,
  };
  return acc;
}, {} as Record<string, any>);

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources,
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
