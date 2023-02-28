import mdiChevronDown from '@iconify/icons-mdi/chevron-down'
import { Icon } from '@iconify/react'
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
      <h1 className="text-xs uppercase tracking-wider">Lancaster, PA</h1>
      <h1 className="text-2xl font-bold mb-4 drop-shadow-md">{t('title')}</h1>
      <Icon icon={mdiChevronDown} className="text-4xl animate-bounce mb-8" />
    </ScreenSection>
  )
}
