import type React from 'react'
import { SectionTitle } from 'pages/Landing/components/Generics'
import { ScrollReveal } from 'pages/Landing/components/ScrollReveal'
import { LandingSection } from 'pages/Landing/components/LandingSection'
import { Flex, styled, Text } from 'ui/src'

const WORK_ITEMS: { id: string; title: string; subtitle: string; image?: string }[] = [
  { id: '1', title: 'Project Alpha', subtitle: 'Brand identity & web' },
  { id: '2', title: 'Project Beta', subtitle: 'Product design' },
  { id: '3', title: 'Project Gamma', subtitle: 'Campaign & strategy' },
  { id: '4', title: 'Project Delta', subtitle: 'Experience design' },
  { id: '5', title: 'Project Epsilon', subtitle: 'Development' },
  { id: '6', title: 'Project Zeta', subtitle: 'Full-stack delivery' },
]

const workGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 48,
  width: '100%',
  maxWidth: 1280,
}

const WorkCard = styled(Flex, {
  flexDirection: 'column',
  gap: 12,
  padding: 24,
  backgroundColor: '$surface2',
  borderRadius: '$rounded16',
  minHeight: 200,
  cursor: 'pointer',
  hoverStyle: {
    backgroundColor: '$surface3',
  },
})

export function WorkFigma() {
  return (
    <ScrollReveal>
      <LandingSection flexDirection="column" gap={72}>
        <SectionTitle>Work</SectionTitle>
        <div style={workGridStyle}>
          {WORK_ITEMS.map((item) => (
            <WorkCard key={item.id}>
              <Flex height={120} backgroundColor="$surface1" borderRadius="$rounded12" />
              <Text variant="subheading1" color="$neutral1">
                {item.title}
              </Text>
              <Text variant="body2" color="$neutral2">
                {item.subtitle}
              </Text>
            </WorkCard>
          ))}
        </div>
      </LandingSection>
    </ScrollReveal>
  )
}
