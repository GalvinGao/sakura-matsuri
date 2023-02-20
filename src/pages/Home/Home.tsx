import { ScreenSection } from '../../components/ScreenSection/ScreenSection'
export function Home() {
  return (
    <section className="flex h-full w-full snap-y snap-mandatory snap-always flex-col overflow-auto">
      {Array.from({ length: 15 }).map((_, i) => (
        <ScreenSection />
      ))}
    </section>
  )
}
