import { motion } from 'framer-motion'
import type React from 'react'
import { LandingBody, SectionTitle } from 'pages/Landing/components/Generics'
import { ScrollReveal, ScrollRevealStagger, staggerItemVariants } from 'pages/Landing/components/ScrollReveal'
import { LandingSection } from 'pages/Landing/components/LandingSection'
import { Flex, styled, Text } from 'ui/src'

const TEAM_MEMBERS: { id: string; name: string; role: string }[] = [
  { id: '1', name: 'Jane Doe', role: 'Creative Director' },
  { id: '2', name: 'John Smith', role: 'Lead Developer' },
  { id: '3', name: 'Alex Chen', role: 'Strategy Lead' },
  { id: '4', name: 'Sam Wilson', role: 'Design Director' },
]

const teamGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: 100,
  rowGap: 64,
  width: '100%',
  maxWidth: 960,
}

const TeamCard = styled(Flex, {
  flexDirection: 'column',
  gap: 16,
})

export function TeamRosterFigma() {
  return (
    <ScrollReveal>
      <LandingSection flexDirection="column" gap={72}>
        <SectionTitle>Team</SectionTitle>
        <ScrollRevealStagger style={teamGridStyle}>
          {TEAM_MEMBERS.map((member) => (
              <motion.div key={member.id} variants={staggerItemVariants}>
                <TeamCard>
                  <Flex
                    width="100%"
                    aspectRatio={1}
                    maxWidth={280}
                    backgroundColor="$surface2"
                    borderRadius="$rounded16"
                  />
                  <Text variant="subheading1" color="$neutral1">
                    {member.name}
                  </Text>
                  <LandingBody fontSize={16}>{member.role}</LandingBody>
                </TeamCard>
              </motion.div>
            ))}
        </ScrollRevealStagger>
      </LandingSection>
    </ScrollReveal>
  )
}
