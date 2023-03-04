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
      contentClassName="flex flex-col items-center justify-end h-full"
    >
      <img src={logo} alt="Sakura" className="w-48 h-48 drop-shadow-md" />
      <h1 className="text-xs uppercase tracking-wider drop-shadow-md">
        Lancaster, PA
      </h1>
      <h1 className="text-2xl font-bold mb-4 drop-shadow-md">{t('title')}</h1>

      <Button
        href="/event.ics"
        className="mb-6 bg-[rgba(255,255,255,0.3)] text-pink-700 px-4 border border-solid border-white/30"
        variant="text"
        color="inherit"
        startIcon={<Icon icon={mdiCalendar} />}
      >
        {t('add-to-calendar')}
      </Button>

      <span>{t('swipe-to-learn-more')}</span>
      <Icon
        icon={mdiChevronDown}
        className="text-4xl animate-bounce cursor-pointer drop-shadow-md"
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
