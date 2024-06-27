import i18n from 'i18next';
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from 'react-i18next';
import enTranslation from './assets/i18n/en.json';
import frTranslation from './assets/i18n/fr.json';

i18n
    .use(i18nBackend)
    .use(initReactI18next)
    .init({
        fallbackLng: 'fr',
        lng: 'fr',
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: {
                translation: enTranslation
            },
            fr: {
                translation: frTranslation
            }

        },
    });

export default i18n;
