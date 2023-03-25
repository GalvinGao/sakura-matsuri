import mdiGitHub from '@iconify/icons-mdi/github'
import { Icon } from '@iconify/react'
import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { ScreenSection } from '../ScreenSection/ScreenSection'

export function SectionCredits() {
  const { t } = useTranslation()

  return (
    <ScreenSection
      id="credits"
      className="!min-h-[30vh]"
      contentClassName="flex flex-col items-start justify-start !min-h-[30vh]"
    >
      <h1 className="text-2xl font-bold pt-2 pb-4">{t('sections.credits')}</h1>
      <div>
        <p>
          This website was created by{' '}
          <Button
            href="https://github.com/GalvinGao"
            variant="text"
            color="inherit"
            className="border border-solid border-white/30 px-4"
            startIcon={<Icon icon={mdiGitHub} />}
          >
            Galvin Gao
          </Button>
          .
        </p>
        <p>
          The website is open source and can be found on{' '}
          <Button
            href="https://github.com/GalvinGao/sakura-matsuri"
            variant="text"
            color="inherit"
            className="border border-solid border-white/30 px-4"
            startIcon={<Icon icon={mdiGitHub} />}
          >
            GitHub
          </Button>
        </p>
      </div>
    </ScreenSection>
  )
}
