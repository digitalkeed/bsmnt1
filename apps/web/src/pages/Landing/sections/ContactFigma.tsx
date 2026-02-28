import { SectionTitle } from 'pages/Landing/components/Generics'
import { ScrollReveal } from 'pages/Landing/components/ScrollReveal'
import { LandingSection } from 'pages/Landing/components/LandingSection'
import { Flex, Text } from 'ui/src'

export function ContactFigma() {
  return (
    <ScrollReveal>
      <LandingSection
        flexDirection="column"
        justifyContent="space-between"
        minHeight="100vh"
        alignItems="center"
      >
        <Flex flex={1} justifyContent="center" alignItems="center" width="100%">
          <SectionTitle>Contact</SectionTitle>
        </Flex>
        <Flex
          width="100%"
          justifyContent="center"
          alignItems="center"
          py={48}
          borderTopWidth={1}
        borderTopColor="$surface3"
        >
          <Text variant="body3" color="$neutral2">
            © {new Date().getFullYear()} Company Name. All rights reserved.
          </Text>
        </Flex>
      </LandingSection>
    </ScrollReveal>
  )
}
