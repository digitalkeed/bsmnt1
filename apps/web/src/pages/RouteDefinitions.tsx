import type { ReactNode } from 'react'
import { useMemo } from 'react'
import { Navigate, Route, Routes, matchPath, useLocation } from 'react-router-dom'
import { isBrowserRouterEnabled } from 'utils/env'
import Landing from 'pages/Landing'

interface RouterConfig {
  browserRouterEnabled?: boolean
  hash?: string
}

export function useRouterConfig(): RouterConfig {
  const browserRouterEnabled = isBrowserRouterEnabled()
  const { hash } = useLocation()
  return useMemo(() => ({ browserRouterEnabled, hash }), [browserRouterEnabled, hash])
}

const StaticTitlesAndDescriptions = {
  BasementTitle: 'Basement Studio | Communication & Video Production',
  BasementDescription: 'Strategy, design, and development for brands that want to stand out.',
}

export interface RouteDefinition {
  path: string
  nestedPaths: string[]
  getTitle: (path?: string) => string
  getDescription: (path?: string) => string
  enabled: (args: RouterConfig) => boolean
  getElement: (args: RouterConfig) => ReactNode
}

function createRouteDefinition(route: Partial<RouteDefinition>): RouteDefinition {
  return {
    getElement: () => null,
    getTitle: () => StaticTitlesAndDescriptions.BasementTitle,
    getDescription: () => StaticTitlesAndDescriptions.BasementDescription,
    enabled: () => true,
    path: '/',
    nestedPaths: [],
    ...route,
  }
}

export const routes: RouteDefinition[] = [
  createRouteDefinition({
    path: '/',
    getTitle: () => StaticTitlesAndDescriptions.BasementTitle,
    getDescription: () => StaticTitlesAndDescriptions.BasementDescription,
    getElement: (args) =>
      args.browserRouterEnabled && args.hash ? <Navigate to={args.hash.replace('#', '')} replace /> : <Landing />,
  }),
  createRouteDefinition({ path: '*', getElement: () => <Navigate to="/" replace /> }),
]

export const findRouteByPath = (pathname: string) => {
  for (const route of routes) {
    const match = matchPath(route.path, pathname)
    if (match) return route
    for (const nestedPath of route.nestedPaths) {
      if (matchPath(`${route.path}/${nestedPath}`, pathname)) return route
    }
  }
  return undefined
}
