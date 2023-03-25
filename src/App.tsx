import { useEffect, useRef } from 'react'
import sakuraBackground from './assets/sakura-bg.jpg?url'
import { Header, NavigationBar } from './components/Header/Header'
import { SectionCredits } from './components/sections/SectionCredits'

import { SectionHero } from './components/sections/SectionHero'
import { SectionIntro } from './components/sections/SectionIntro'
import { SectionMap } from './components/sections/SectionMap'
import { SectionOverview } from './components/sections/SectionOverview'
import { SectionSchedule } from './components/sections/SectionSchedule'

function App() {
  const imageRef = useRef<HTMLImageElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function scrollHandler(e: Event) {
      // calculate the percentage of the scroll container that has been scrolled
      // (how many viewports have been scrolled)
      const scrollContainer = e.target as HTMLDivElement
      const scrollPercentage = Math.min(
        scrollContainer.scrollTop / scrollContainer.clientHeight,
        1.1,
      )

      // if (scrollPercentage > 1) {
      //   return
      // }

      const image = imageRef.current
      if (!image) return

      window.requestAnimationFrame(() => {
        image.style.filter = `brightness(${1 - scrollPercentage * 0.8})`
        image.style.transform = `scale(${1.1 + scrollPercentage * 0.2})`
      })
    }

    scrollContainerRef.current?.addEventListener('scroll', scrollHandler, {
      passive: true,
    })

    return () => {
      scrollContainerRef.current?.removeEventListener('scroll', scrollHandler)
    }
  }, [scrollContainerRef])

  return (
    <main className="inner-root relative">
      <img
        ref={imageRef}
        src={sakuraBackground}
        alt="Sakura"
        className="fixed inset-0 w-full h-full object-cover -z-1 scale-110"
      />

      <Header />
      <section
        className="relative h-[calc(100%-6rem)] w-full snap-y snap-proximity snap-always overflow-auto text-primary z-1 mt-[3rem]"
        ref={scrollContainerRef}
      >
        <SectionHero />
        <SectionOverview />
        <SectionIntro />
        <SectionMap />
        <SectionSchedule />
        <SectionCredits />
      </section>
      <NavigationBar />
    </main>
  )
}

export default App
