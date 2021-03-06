import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { DASHBOARD_TRANSLATIONS_EN } from './dashboard/dashboard.en'
import { LOGIN_TRANSLATIONS_EN } from './login/login.en'
import { LOGIN_TRANSLATIONS_NL } from './login/login.nl'
import { DASHBOARD_TRANSLATIONS_NL } from './dashboard/dashboard.nl'
import { HOME_TRANSLATIONS_EN } from './home/home.en'
import { HOME_TRANSLATIONS_NL } from './home/home.nl'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        dashboard: DASHBOARD_TRANSLATIONS_EN,
        home: HOME_TRANSLATIONS_EN,
        login: LOGIN_TRANSLATIONS_EN,
      },
      nl: {
        dashboard: DASHBOARD_TRANSLATIONS_NL,
        home: HOME_TRANSLATIONS_NL,
        login: LOGIN_TRANSLATIONS_NL,
      },
    },
    fallbackLng: 'en',
    debug: true,

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
