import { ColumnCenter } from 'components/deprecated/Column'
import { SectionTitle } from 'pages/Landing/components/Generics'
import { LandingSection } from 'pages/Landing/components/LandingSection'
import { ChevronDown } from 'react-feather'
import { LANDING_FONT_FAMILIES } from 'pages/Landing/constants'
import { Flex, Text } from 'ui/src'
import { INTERFACE_NAV_HEIGHT } from 'ui/src/theme'

const HERO_HEADLINE = 'We build experiences that matter.'
const HERO_SUBTITLE = 'Strategy, design, and development for brands that want to stand out.'

interface HeroFigmaProps {
  scrollToRef: () => void
  /** Optional Vimeo video ID for background. If not set, a gradient fallback is used. */
  vimeoVideoId?: string | null
}

export function HeroFigma({ scrollToRef, vimeoVideoId }: HeroFigmaProps) {
  return (
    <Flex position="relative" minHeight="100vh" width="100%" overflow="hidden">
      {/* Background: Vimeo or gradient */}
      {vimeoVideoId ? (
        <Flex position="absolute" inset={0} zIndex={0}>
          <iframe
            src={`https://player.vimeo.com/video/${vimeoVideoId}?background=1&autoplay=1&muted=1&loop=1`}
            title="Hero background"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100vw',
              height: '100vh',
              minWidth: '177.78vh',
              minHeight: '56.25vw',
              transform: 'translate(-50%, -50%)',
              border: 'none',
            }}
            allow="autoplay; fullscreen; picture-in-picture"
          />
        </Flex>
      ) : null}
      {/* Overlay for readability */}
      <Flex
        position="absolute"
        inset={0}
        zIndex={1}
        backgroundColor="$neutral2"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)',
        }}
        pointerEvents="none"
      />

      <LandingSection
        position="relative"
        zIndex={2}
        pt={INTERFACE_NAV_HEIGHT}
        flexDirection="column"
        gap={24}
        pointerEvents="none"
      >
        <Flex flex={1} alignItems="center" justifyContent="center" flexDirection="column" gap={24} maxWidth={920}>
          <SectionTitle textAlign="center">{HERO_HEADLINE}</SectionTitle>
          <Text
            textAlign="center"
            color="$neutral1"
            fontSize={18}
            lineHeight={28}
            maxWidth={560}
            style={{ fontFamily: LANDING_FONT_FAMILIES.body }}
          >
            {HERO_SUBTITLE}
          </Text>
        </Flex>

        <Flex flex={1} minHeight={48} />

        <Flex
          position="absolute"
          bottom={48}
          left={0}
          right={0}
          justifyContent="center"
          alignItems="center"
          pointerEvents="auto"
          $midHeight={{ display: 'none' }}
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            onPress={() => scrollToRef()}
            cursor="pointer"
            gap={8}
          >
            <ColumnCenter>
              <Text variant="body2" color="$neutral2">
                Scroll to explore
              </Text>
              <ChevronDown size={20} color="currentColor" />
            </ColumnCenter>
          </Flex>
        </Flex>
      </LandingSection>
    </Flex>
  )
}
