import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ModalNameType } from 'uniswap/src/features/telemetry/constants'

export type OpenModalParams = { name: ModalNameType; initialState?: unknown }

export interface ApplicationState {
  readonly chainId: number | null
  readonly openModal: OpenModalParams | null
  readonly suppressedPopups: string[]
  readonly downloadGraduatedWalletCardsDismissed: string[]
}

const initialState: ApplicationState = {
  chainId: null,
  openModal: null,
  suppressedPopups: [],
  downloadGraduatedWalletCardsDismissed: [],
}

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    updateDownloadGraduatedWalletCardsDismissed(
      state,
      { payload: { walletAddress } }: PayloadAction<{ walletAddress: string }>,
    ) {
      state.downloadGraduatedWalletCardsDismissed = Array.from(
        new Set([...state.downloadGraduatedWalletCardsDismissed, walletAddress]),
      )
    },
    updateChainId(state, action: PayloadAction<{ chainId: number }>) {
      state.chainId = action.payload.chainId
    },
    setOpenModal(state, action: PayloadAction<OpenModalParams>) {
      state.openModal = action.payload
    },
    setCloseModal(state, action: PayloadAction<ModalNameType | undefined>) {
      const { payload } = action
      if (!payload || (state.openModal?.name as string) === payload) {
        state.openModal = null
      }
    },
    addSuppressedPopups(state, { payload: { popupTypes } }: PayloadAction<{ popupTypes: string[] }>) {
      state.suppressedPopups = Array.from(new Set([...state.suppressedPopups, ...popupTypes]))
    },
    removeSuppressedPopups(state, { payload: { popupTypes } }: PayloadAction<{ popupTypes: string[] }>) {
      state.suppressedPopups = state.suppressedPopups.filter((type) => !popupTypes.includes(type))
    },
  },
})

export const {
  updateChainId,
  setOpenModal,
  setCloseModal,
  addSuppressedPopups,
  removeSuppressedPopups,
  updateDownloadGraduatedWalletCardsDismissed,
} = applicationSlice.actions
export default applicationSlice.reducer
