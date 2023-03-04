import mdiCurrencyUsdOff from '@iconify/icons-mdi/currency-usd-off'
import { Icon } from '@iconify/react'
import { Alert } from '@mui/material'
import { marked } from 'marked'
import { useTranslation } from 'react-i18next'
import { ScreenSection } from '../ScreenSection/ScreenSection'

export function SectionOverview() {
  const { t } = useTranslation()

  const parsed = marked.parse(t('overview'))

  return (
    <ScreenSection id="overview">
      {/* <h1 className="text-2xl font-bold pt-2 pb-4">{t('sections.overview')}</h1> */}
      <Alert
        severity="success"
        sx={{
          mb: 2,
          background: 'rgba(237, 247, 237, 0.3)',
          border: '1px solid rgb(237, 247, 237)',
          '& .MuiAlert-icon': {
            color: 'rgba(74, 222, 128)',
          },
        }}
        className="text-green-200 font-bold"
        icon={<Icon icon={mdiCurrencyUsdOff} color="inherit" />}
      >
        {t('admission-free')}
      </Alert>
      <div
        className="prose prose-invert"
        dangerouslySetInnerHTML={{ __html: parsed }}
      />
    </ScreenSection>
  )
}
