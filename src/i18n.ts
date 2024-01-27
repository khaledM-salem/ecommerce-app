// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: {
      translation: require('./locales/en/translation.json'),
    },
    ar: {
      translation: require('./locales/ar/translation.json'),
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
