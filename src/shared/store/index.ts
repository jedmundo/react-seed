import { createStore, applyMiddleware, compose, Store } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import { rootReducer, rootEpic } from './root'
import { SessionState } from './session/types'
import { TodoState } from './todos/types'

export interface ApplicationState {
  session: SessionState
  todos: TodoState
}

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const epicMiddleware = createEpicMiddleware()

export default function configureStore() {
  const store: Store<ApplicationState> = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
  )

  epicMiddleware.run(rootEpic)

  return store
}
