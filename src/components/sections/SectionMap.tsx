import { useTranslation } from 'react-i18next'
import { ScreenSection } from '../ScreenSection/ScreenSection'
export function SectionMap() {
  const { t } = useTranslation()

  return (
    <ScreenSection id="map">
      <h1 className="text-2xl font-bold pt-2 pb-4">{t('sections.map')}</h1>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1071.1643183641654!2d-76.32067370598482!3d40.04618251791411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c624610a5a01e9%3A0x37ab8021e6c07668!2z44OP44O844OI44Oe44Oz44O744Kw44Oq44O844Oz!5e0!3m2!1sja!2sus!4v1677653915766!5m2!1sja!2sus"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer"
        ></iframe>
      </div>
    </ScreenSection>
  )
}
