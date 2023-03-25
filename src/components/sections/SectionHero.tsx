import mdiAlertCircle from '@iconify/icons-mdi/alert-circle'
import mdiCalendar from '@iconify/icons-mdi/calendar'
import mdiChevronDown from '@iconify/icons-mdi/chevron-down'
import { Icon } from '@iconify/react'
import { Alert, Button } from '@mui/material'
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

      <Alert
        sx={{
          mb: 2,
          background:
            'repeating-linear-gradient(-45deg, rgba(237, 247, 237, 0.3), rgba(237, 247, 237, 0.3) 10px, rgba(237, 247, 237, 0.1) 10px, rgba(237, 247, 237, 0.1) 20px)',
          '& .MuiAlert-icon': {
            color: 'rgba(174, 45, 93, 0.8)',
          },
        }}
        className="font-bold w-full text-pink-700"
        icon={<Icon icon={mdiAlertCircle} color="inherit" />}
      >
        {t('alert-location-change')}
      </Alert>

      <Button
        href="/event.ics"
        className="mb-6 bg-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.4)] active:bg-[rgba(255,255,255,0.2)] text-pink-700 px-4 border border-solid border-white/30"
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
