import 'sideEffects'

import { PortalProvider } from '@tamagui/portal'
import App from 'pages/App'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async/lib/index'
import { configureReanimatedLogger } from 'react-native-reanimated'
import { Provider } from 'react-redux'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import store from 'state/basementStore'
import { ThemeProvider, ThemedGlobalStyle } from 'theme'
import { TamaguiProvider } from 'theme/tamaguiProvider'
import { isTestEnv } from 'utilities/src/environment/env'
import { isBrowserRouterEnabled } from 'utils/env'
import { unregister as unregisterServiceWorker } from 'utils/serviceWorker'

if (window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false
}

if (__DEV__ && !isTestEnv()) {
  configureReanimatedLogger({ strict: false })
}

const container = document.getElementById('root') as HTMLElement
const Router = isBrowserRouterEnabled() ? BrowserRouter : HashRouter

createRoot(container).render(
  <HelmetProvider>
    <Provider store={store}>
      <Router
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
        }}
      >
        <ThemeProvider>
          <TamaguiProvider>
            <PortalProvider>
              <ThemedGlobalStyle />
              <App />
            </PortalProvider>
          </TamaguiProvider>
        </ThemeProvider>
      </Router>
    </Provider>
  </HelmetProvider>,
)

unregisterServiceWorker()
