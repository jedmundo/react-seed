import { combineReducers } from 'redux'

import { sessionReducer } from './session/reducer'

export const rootReducer = combineReducers({
  sessionReducer,
})
