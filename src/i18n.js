import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {message as enTranslation} from "./translation/en/index";
import {message as hiTranslation} from "./translation/hi/index";


const resources = {
  en: {
    translation: enTranslation
  },
  hi: {
    translation: hiTranslation
  }
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
