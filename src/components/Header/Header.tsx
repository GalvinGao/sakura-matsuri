import mdiCalendar from '@iconify/icons-mdi/calendar'
import mdiHome from '@iconify/icons-mdi/home'
import mdiHumanGreeting from '@iconify/icons-mdi/human-greeting'
import mdiMap from '@iconify/icons-mdi/map'
import { Icon } from '@iconify/react'
import { ButtonBase } from '@mui/material'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageSettings } from '../LanguageSettings'

export const SECTIONS = [
  { title: 'overview', icon: mdiHome },
  { title: 'intro', icon: mdiHumanGreeting },
  { title: 'map', icon: mdiMap },
  { title: 'schedule', icon: mdiCalendar },
  // { title: 'president-message' },
  // { title: 'sponsors' },
  // { title: 'contact' },
  // { title: 'faq' },
]

export function Header() {
  const { t } = useTranslation()
  return (
    <header className="fixed top-0 flex flex-col items-start justify-center bg-pink-50 shadow w-full z-10">
      <div className="h-12 flex items-center w-full px-4 py-1">
        <div className="inline-flex items-center justify-between font-bold">
          {t('title')}
        </div>
        <div className="flex-1">&nbsp;</div>
        <LanguageSettings />
      </div>
    </header>
  )
}

export function NavigationBar() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const { t } = useTranslation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const intersectingId = entries.find(entry => entry.isIntersecting)
          ?.target.id

        if (intersectingId) {
          setActiveSection(intersectingId.replace('section-', ''))
        }
      },
      { threshold: 0.2 },
    )

    SECTIONS.forEach(el => {
      const element = document.getElementById('section-' + el.title)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  // useEffect(() => {
  //   // scroll that nav button into view
  //   document.getElementById('nav-' + activeSection)?.scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'center',
  //   })
  // }, [activeSection])

  return (
    <div className="fixed bottom-0 bg-pink-50 shadow w-full pb-[env(safe-area-inset-bottom)]">
      <div className="px-4 py-2 h-12 flex items-center justify-start gap-1 overflow-x-auto w-full">
        {SECTIONS.map((el, i) => (
          <ButtonBase
            key={el.title}
            id={'nav-' + el.title}
            className={clsx(
              'flex items-center text-center w-full rounded-full px-3 h-full snap-x snap-mandatory whitespace-nowrap transition',
              activeSection === el.title
                ? 'bg-pink-200 text-pink-900'
                : 'text-pink-700',
            )}
            onClick={() => {
              document.getElementById('section-' + el.title)?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }}
          >
            {el.icon && <Icon icon={el.icon} className="mr-1 opacity-80" />}
            <span>{t('sections.' + el.title)}</span>
          </ButtonBase>
        ))}
      </div>
    </div>
  )
}
