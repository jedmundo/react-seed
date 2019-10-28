import { combineReducers } from 'redux'

import { sessionReducer } from './session/reducer'
import { todosReducer } from './todos/reducer'

export const rootReducer = combineReducers({
  sessionReducer,
  todosReducer,
})
