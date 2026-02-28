import ErrorBoundary from 'components/ErrorBoundary'
import { Body } from 'pages/App/Body'
import { AppLayout } from 'pages/App/Layout'
import { ResetPageScrollEffect } from 'pages/App/utils/ResetPageScroll'
import { findRouteByPath } from 'pages/RouteDefinitions'
import { useDynamicMetatags } from 'pages/metatags'
import { Helmet } from 'react-helmet-async/lib/index'
import { useLocation } from 'react-router-dom'
import DarkModeQueryParamReader from 'theme/components/DarkModeQueryParamReader'
import { useSporeColors } from 'ui/src'

export default function App() {
  const colors = useSporeColors()
  const location = useLocation()
  const pathname = location.pathname
  const metaTags = useDynamicMetatags()
  const staticTitle = findRouteByPath(pathname)?.getTitle(pathname) ?? 'Basement Studio'
  const staticDescription = findRouteByPath(pathname)?.getDescription(pathname)

  return (
    <ErrorBoundary>
      <DarkModeQueryParamReader />
      <Helmet>
        <title>{staticTitle}</title>
        {staticDescription && <meta name="description" content={staticDescription} />}
        {staticDescription && <meta property="og:description" content={staticDescription} />}
        {metaTags.map((tag, index) => (
          <meta key={index} {...tag} />
        ))}
        <style>{`
          html {
            ::-webkit-scrollbar-thumb {
              background-color: ${colors.surface3.val};
            }
            scrollbar-color: ${colors.surface3.val} ${colors.surface1.val};
          }
        `}</style>
      </Helmet>
      <ResetPageScrollEffect />
      <AppLayout />
    </ErrorBoundary>
  )
}
