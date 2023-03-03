import { marked } from 'marked'
import { useTranslation } from 'react-i18next'
import { ScreenSection } from '../ScreenSection/ScreenSection'

export function SectionOverview() {
  const { t } = useTranslation()

  const parsed = marked.parse(t('overview'))

  return (
    <ScreenSection id="overview">
      {/* <h1 className="text-2xl font-bold pt-2 pb-4">{t('sections.overview')}</h1> */}
      <div
        className="prose prose-invert"
        dangerouslySetInnerHTML={{ __html: parsed }}
      />
    </ScreenSection>
  )
}
