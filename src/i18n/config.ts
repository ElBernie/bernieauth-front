import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import english from './en/translation.json';
import french from './fr/translation.json';

export const resources = {
	en: {
		translation: english,
	},
	fr: {
		translation: french,
	},
};

const languageDetector = new LanguageDetector();
const i18nInstance = i18next.createInstance({
	fallbackLng: 'en',
	debug: true,

	interpolation: {
		escapeValue: false, // not needed for react as it escapes by default
	},
	resources,
});

const i18nextConfig = i18nInstance
	.use(languageDetector)
	.use(initReactI18next)
	.init();
export default i18nextConfig;
