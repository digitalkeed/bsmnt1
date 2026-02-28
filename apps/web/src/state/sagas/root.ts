import { PersistState } from 'redux-persist'
import { delay, select } from 'typed-redux-saga'

export function* rootWebSaga() {
  while (true) {
    if (yield* select((state: { _persist?: PersistState }): boolean | undefined => state._persist?.rehydrated)) {
      break
    }
    yield* delay(50)
  }
}
