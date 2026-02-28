import { memo, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const ResetPageScrollEffect = memo(function ResetPageScrollEffect() {
  const { pathname } = useLocation()
  const [hasChangedOnce, setHasChangedOnce] = useState(false)

  useEffect(() => {
    if (!hasChangedOnce) {
      setHasChangedOnce(true)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hasChangedOnce])

  return null
})
