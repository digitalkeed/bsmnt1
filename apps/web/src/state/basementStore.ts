import { combineReducers, configureStore } from '@reduxjs/toolkit'
import localForage from 'localforage'
import { PersistConfig, persistReducer, persistStore } from 'redux-persist'
import application from 'state/application/reducer'
import { updateVersion } from 'state/global/actions'

const basementReducer = combineReducers({
  application,
})

type BasementState = ReturnType<typeof basementReducer>

const persistConfig: PersistConfig<BasementState> = {
  key: 'basement',
  version: 1,
  storage: localForage.createInstance({
    name: 'basement_interface',
    driver: localForage.LOCALSTORAGE,
  }),
  whitelist: ['application'],
}

const persistedReducer = persistReducer(persistConfig, basementReducer)

export function createBasementStore() {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: true,
        serializableCheck: {
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/PURGE', 'persist/FLUSH'],
        },
      }),
  })
  store.dispatch(updateVersion())
  return store
}

const store = createBasementStore()
export const persistor = persistStore(store)
export default store
