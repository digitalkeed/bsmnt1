import { GRID_AREAS } from 'pages/App/utils/shared'
import { memo } from 'react'
import { Flex, Text } from 'ui/src'
import { INTERFACE_NAV_HEIGHT, zIndexes } from 'ui/src/theme'

export const Header = memo(function Header() {
  return (
    <Flex
      id="AppHeader"
      $platform-web={{
        gridArea: GRID_AREAS.HEADER,
        position: 'sticky',
      }}
      className="webkitSticky"
      width="100vw"
      top={0}
      zIndex={zIndexes.dropdown}
      height={INTERFACE_NAV_HEIGHT}
      minHeight={INTERFACE_NAV_HEIGHT}
      alignItems="center"
      justifyContent="center"
      paddingHorizontal="$spacing24"
      backgroundColor="$surface1"
      borderBottomWidth={1}
      borderBottomColor="$surface3"
    >
      <style>
        {`
          .webkitSticky {
            position: -webkit-sticky;
          }
        `}
      </style>
      <Text variant="body1" fontWeight="$bold">
        Basement Studio
      </Text>
    </Flex>
  )
})
