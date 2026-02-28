import { motion } from 'framer-motion'
import { Flex, styled, Text } from 'ui/src'

const TICKER_ITEMS = [
  'Strategy',
  'Design',
  'Development',
  'Brand',
  'Experience',
  '—',
  'Strategy',
  'Design',
  'Development',
  'Brand',
  'Experience',
  '—',
]

const MarqueeContainer = styled(Flex, {
  width: '100%',
  overflow: 'hidden',
  backgroundColor: '$accent1',
  py: 16,
})

export function MarqueeTicker() {
  const duplicatedItems = [...TICKER_ITEMS, ...TICKER_ITEMS]
  const trackWidth = TICKER_ITEMS.length * 120 + 48 * (TICKER_ITEMS.length - 1)

  return (
    <MarqueeContainer>
      <motion.div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 48,
          flexShrink: 0,
        }}
        animate={{ x: [0, -trackWidth / 2] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        }}
      >
        {duplicatedItems.map((item, i) => (
          <Text
            key={`${i}-${item}`}
            fontFamily="$body"
            fontSize={20}
            fontWeight="$medium"
            color="$accent3"
            style={{ whiteSpace: 'nowrap' }}
          >
            {item}
          </Text>
        ))}
      </motion.div>
    </MarqueeContainer>
  )
}
