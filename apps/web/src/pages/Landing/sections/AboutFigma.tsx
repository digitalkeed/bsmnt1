import { LandingBody, SectionTitle } from 'pages/Landing/components/Generics'
import { ScrollReveal } from 'pages/Landing/components/ScrollReveal'
import { LandingSection } from 'pages/Landing/components/LandingSection'
import { Flex } from 'ui/src'

const ABOUT_COPY =
  'We are a studio that believes in the power of craft and clarity. We partner with ambitious brands to create work that resonates—strategy, design, and development in one place.'

export function AboutFigma() {
  return (
    <ScrollReveal>
      <LandingSection flexDirection="column" gap={56}>
        <SectionTitle>About</SectionTitle>
        <Flex maxWidth={680}>
          <LandingBody fontSize={18} lineHeight={28}>
            {ABOUT_COPY}
          </LandingBody>
        </Flex>
      </LandingSection>
    </ScrollReveal>
  )
}
