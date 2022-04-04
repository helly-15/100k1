import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

export default i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "../assets/locales/{{lng}}/translation.json",
    },
    // resources: {
    //   en: {
    //     translation: {
    //       signup: 'Sign up',
    //       login: 'Log in',
    //       simple: 'Simple game',
    //       double: 'Double game',
    //       triple: 'Triple game',
    //       viceversa: 'Reverse game',
    //       big: 'Big game',
    //     },
    //   },
    //   ru: {
    //     translation: {
    //       signup: 'Зарегистрироваться',
    //       login: 'Войти',
    //       simple: 'Простая игра',
    //       double: 'Двойная игра',
    //       triple: 'Тройная игра',
    //       viceversa: 'Игра наоборот',
    //       big: 'Большая игра',
    //     },
    //   },
    // },
  });
