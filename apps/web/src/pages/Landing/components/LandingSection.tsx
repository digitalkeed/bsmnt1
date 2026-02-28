import { Flex, styled } from 'ui/src'

// Each section fills one viewport (1920×1080) with generous padding for breathing room
export const LandingSection = styled(Flex, {
  minHeight: '100vh',
  width: '100%',
  maxWidth: '100vw',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  py: 120,
  px: 32,
  $sm: {
    py: 140,
    px: 48,
  },
  $md: {
    py: 160,
    px: 64,
  },
  $lg: {
    py: 180,
    px: 80,
  },
  $xl: {
    py: 200,
    px: 96,
  },
})
