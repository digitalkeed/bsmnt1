import { motion } from 'framer-motion'
import { LandingBody, SectionTitle } from 'pages/Landing/components/Generics'
import { ScrollReveal, ScrollRevealStagger, staggerItemVariants } from 'pages/Landing/components/ScrollReveal'
import { LandingSection } from 'pages/Landing/components/LandingSection'
import { Flex, styled } from 'ui/src'

const CAPABILITIES: { id: string; title: string; description: string }[] = [
  { id: '1', title: 'Strategy', description: 'Research, positioning, and go-to-market.' },
  { id: '2', title: 'Design', description: 'Brand, product, and experience design.' },
  { id: '3', title: 'Development', description: 'Web, mobile, and platform development.' },
]

const CapabilityRow = styled(Flex, {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 32,
  paddingVertical: 32,
  borderBottomWidth: 1,
  borderBottomColor: '$surface3',
  $sm: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 12,
  },
})

export function CapabilitiesFigma() {
  return (
    <ScrollReveal>
      <LandingSection flexDirection="column" gap={72}>
        <SectionTitle>Capabilities</SectionTitle>
        <ScrollRevealStagger style={{ display: 'flex', flexDirection: 'column' }}>
          {CAPABILITIES.map((item) => (
            <motion.div key={item.id} variants={staggerItemVariants}>
              <CapabilityRow>
                <SectionTitle style={{ fontSize: 32, lineHeight: 1 }}>{item.title}</SectionTitle>
                <LandingBody flex={1}>{item.description}</LandingBody>
              </CapabilityRow>
            </motion.div>
          ))}
        </ScrollRevealStagger>
      </LandingSection>
    </ScrollReveal>
  )
}
