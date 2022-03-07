import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    fallbackLng: "fa",
    debug: false,
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
      cookieMinutes: 160,
      lookupFromPathIndex: 0,
      lookupLocalStorage: "lang",
    },
    backend: {
      loadPath: "/i18n/translations/{{lng}}.json",
      allowMultiLoading: false,
    },

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    react: {
      // bindI18n: "languageChanged",
      // bindI18nStore: "",
      // transEmptyNodeValue: "",
      // transSupportBasicHtmlNodes: true,
      // transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
      useSuspense: false,
    },
  });

export default i18n;
