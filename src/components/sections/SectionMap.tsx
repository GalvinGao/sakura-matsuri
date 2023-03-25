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
          src="https://maps.google.com/maps?ll=40.047272,-76.32049&z=16&t=m&hl=en&gl=US&output=embed&cid=4011440776197207656"
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
