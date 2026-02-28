import { AboutFigma } from 'pages/Landing/sections/AboutFigma'
import { CapabilitiesFigma } from 'pages/Landing/sections/CapabilitiesFigma'
import { ContactFigma } from 'pages/Landing/sections/ContactFigma'
import { HeroFigma } from 'pages/Landing/sections/HeroFigma'
import { TeamRosterFigma } from 'pages/Landing/sections/TeamRosterFigma'
import { WorkFigma } from 'pages/Landing/sections/WorkFigma'
import { MarqueeTicker } from 'pages/Landing/components/MarqueeTicker'
import { memo, useRef } from 'react'
import { Flex } from 'ui/src'
import { INTERFACE_NAV_HEIGHT } from 'ui/src/theme'

function LandingV2({ transition: _transition }: { transition?: boolean }) {
  const workSectionRef = useRef<HTMLDivElement | null>(null)

  const scrollToWork = () => {
    if (workSectionRef.current) {
      window.scrollTo({
        top: workSectionRef.current.offsetTop - 120,
        behavior: 'smooth',
      })
    }
  }

  return (
    <Flex
      position="relative"
      alignItems="stretch"
      flexDirection="column"
      mt={-INTERFACE_NAV_HEIGHT}
      minWidth="100vw"
      data-testid="landing-page"
    >
      <HeroFigma scrollToRef={scrollToWork} vimeoVideoId={null} />
      <MarqueeTicker />
      <div ref={workSectionRef} style={{ minHeight: '100vh', flexShrink: 0 }}>
        <WorkFigma />
      </div>
      <CapabilitiesFigma />
      <TeamRosterFigma />
      <AboutFigma />
      <ContactFigma />
    </Flex>
  )
}

export default memo(LandingV2)
