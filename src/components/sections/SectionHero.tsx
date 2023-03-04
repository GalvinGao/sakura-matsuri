import mdiCalendar from '@iconify/icons-mdi/calendar'
import mdiChevronDown from '@iconify/icons-mdi/chevron-down'
import { Icon } from '@iconify/react'
import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/logo.png?url'
import { ScreenSection } from '../ScreenSection/ScreenSection'

export function SectionHero() {
  const { t } = useTranslation()

  return (
    <ScreenSection
      id="hero"
      className="h-full"
      contentClassName="flex flex-col items-center justify-end h-full drop-shadow-md"
    >
      <img src={logo} alt="Sakura" className="w-48 h-48" />
      <h1 className="text-xs uppercase tracking-wider">Lancaster, PA</h1>
      <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>

      <Button
        href="/event.ics"
        className="mb-6 bg-pink-900 text-primary"
        variant="contained"
        color="inherit"
        startIcon={<Icon icon={mdiCalendar} />}
      >
        {t('add-to-calendar')}
      </Button>

      <span>{t('swipe-to-learn-more')}</span>
      <Icon
        icon={mdiChevronDown}
        className="text-4xl animate-bounce cursor-pointer"
        onClick={() => {
          document.getElementById('section-overview')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }}
      />
    </ScreenSection>
  )
}
