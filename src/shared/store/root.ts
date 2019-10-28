import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'

import { sessionReducer } from './session/reducer'
import { todosReducer } from './todos/reducer'
import { fetchTodosEpic } from './todos/epics'

export const rootReducer = combineReducers({
  sessionReducer,
  todosReducer,
})

export const rootEpic = combineEpics(fetchTodosEpic)
