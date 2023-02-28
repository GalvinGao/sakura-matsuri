import { useTranslation } from 'react-i18next'
import { ScreenSection } from '../ScreenSection/ScreenSection'
export function SectionMap() {
  const { t } = useTranslation()

  return (
    <ScreenSection id="map">
      <h1 className="text-2xl font-bold pt-2 pb-4">{t('sections.map')}</h1>
      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.340121451609!2d139.6912343152294!3d35.68948778019075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f0f0b5d9b0b%3A0x3a1e8b3b4c3a3d2c!2z44CSMTMwLTAwMzEg5p2x5Lqs6YO95paw5Yy65Y2X5biC5Lit5aSu5Yy65Y2X5biC77yR5LiB55uu77yV4oiS77yR77yQ!5e0!3m2!1sja!2sjp!4v1625529011570!5m2!1sja!2sjp"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        />
      </div>
    </ScreenSection>
  )
}
