import { useTranslation } from 'react-i18next'
import { ReactComponent as MapSvg } from '../../assets/map.svg'
import { ScreenSection } from '../ScreenSection/ScreenSection'

export function SectionMap() {
  const { t } = useTranslation()

  return (
    <ScreenSection id="map">
      <h1 className="text-2xl font-bold pt-2 pb-4">{t('sections.map')}</h1>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d930.3239457356133!2d-76.31848416992901!3d40.04813986267299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c624618d403963%3A0x9fda090ec98e546f!2sMayser%20Gymnasium!5e0!3m2!1sja!2sus!4v1679764451816!5m2!1sja!2sus"
          width="100%"
          height="500"
          style={{ border: 0, height: '35vh' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer"
        ></iframe>

        <div className="flex flex-col items-center justify-center mt-4">
          <MapSvg />
        </div>
      </div>
    </ScreenSection>
  )
}
