export const ModalName = {
  AddLiquidity: 'AddLiquidity',
  RemoveLiquidity: 'RemoveLiquidity',
  ClaimFee: 'ClaimFee',
  PrivacyPolicy: 'PrivacyPolicy',
} as const

export type ModalNameType = (typeof ModalName)[keyof typeof ModalName] | string

export const InterfacePageName = {
  LandingPage: 'LandingPage',
  SwapPage: 'SwapPage',
  TokenDetailsPage: 'TokenDetailsPage',
  ExplorePage: 'ExplorePage',
} as const

export type InterfacePageName = (typeof InterfacePageName)[keyof typeof InterfacePageName]

export const InterfaceEventName = {}
export const ElementName = {}
export const SwapEventName = {}
export const UniswapEventName = {}
