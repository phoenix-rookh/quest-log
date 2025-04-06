import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import Backend, { HttpBackendOptions } from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init<HttpBackendOptions>({
    defaultNS: "translation",
    fallbackLng: false,
    fallbackNS: "translation",
    keySeparator: false,
    lng: "en",
    load: "currentOnly",
    nsSeparator: ".",
    backend: { loadPath: "/locales/{{lng}}/{{ns}}.json" },
  });
