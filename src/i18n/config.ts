import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import english from './en/index';
import french from './fr/index';

export const resources = {
	en: english,
	fr: french,
};

const languageDetector = new LanguageDetector();
const i18nInstance = i18next.createInstance({
	fallbackLng: 'en',
	debug: true,
	ns: ['translation', 'validation'],
	defaultNS: 'translation',
	interpolation: {
		escapeValue: false, // not needed for react as it escapes by default
	},
	resources: resources,
});

const i18nextConfig = i18nInstance
	.use(languageDetector)
	.use(initReactI18next)
	.init();
export default i18nextConfig;
