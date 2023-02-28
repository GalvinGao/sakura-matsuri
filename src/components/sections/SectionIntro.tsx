import { marked } from 'marked'
import { useTranslation } from 'react-i18next'
import { ScreenSection } from '../ScreenSection/ScreenSection'

export function SectionIntro() {
  const { t } = useTranslation()

  const parsed = marked.parse(t('intro'))

  return (
    <ScreenSection id="intro">
      <h1 className="text-2xl font-bold pt-2 pb-4">{t('sections.intro')}</h1>
      <div
        className="prose prose-invert"
        dangerouslySetInnerHTML={{ __html: parsed }}
      />
    </ScreenSection>
  )
}
