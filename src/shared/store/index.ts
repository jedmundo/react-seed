import { createStore, Store } from 'redux'

import { rootReducer } from './rootReducer'
import { SessionState } from './session/types'
import { TodoState } from './todos/types'

export interface ApplicationState {
  session: SessionState
  todos: TodoState
}

// const sagaMiddleware = createSagaMiddleware()
// sagaMiddleware.run(rootSaga)

export const store: Store<ApplicationState> = createStore(rootReducer)
