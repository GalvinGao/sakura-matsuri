import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

// resources are located at ./locales/{lang}/{resource}
// where, {lang} is the language code and {resource} is one of the following:
// - {resource}.json
// - {resource}.md
// the reducer below should:
// - get the language code from the path
// - get the resource name and file extension from the path
// - get the resource content from the module
// - if the file extension is json, ignore the "resource name" and merge the content with the existing resources
// - if the file extension is md, add the content to the existing resources under the "resource name" key
const resources = Object.entries(
  import.meta.glob<true, string>(`./locales/*/*.+(json|md)`, {
    eager: true,
  }),
).reduce((acc, [path, module]) => {
  const match = path.match(/\.\/locales\/(.*)\/(.*)\.(json|md)/)
  if (!match) {
    return acc
  }
  const [, lang, resource, ext] = match
  const moduleContent = module as { default: unknown }
  if (ext === 'json') {
    const content = moduleContent.default as Record<string, string>
    return {
      ...acc,
      [lang]: {
        ...acc[lang],
        ...content,
      },
    }
  } else {
    const content = moduleContent.default as string
    return {
      ...acc,
      [lang]: {
        ...acc[lang],
        [resource]: content,
      },
    }
  }
}, {} as Record<string, any>)

console.log('resources', resources)

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    // the translations
    // map resources (in form of {lang: {resource: content}}) to {lang: {translation: {resource: content}}}
    resources: Object.entries(resources).reduce(
      (acc, [lang, resources]) => ({
        ...acc,
        [lang]: {
          translation: resources,
        },
      }),
      {} as Record<string, any>,
    ),
    // lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },

    // LanguageDetector options
    detection: {
      order: ['cookie', 'localStorage', 'navigator'],
      caches: ['localStorage', 'cookie'],
    },
  })
