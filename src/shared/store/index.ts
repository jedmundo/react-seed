import { createStore, Store } from 'redux'
import { rootReducer } from './rootReducer'
import { SessionState } from './session/types'

export interface ApplicationState {
  session: SessionState
}

// const sagaMiddleware = createSagaMiddleware()
// sagaMiddleware.run(rootSaga)

export const store: Store<ApplicationState> = createStore(rootReducer)
