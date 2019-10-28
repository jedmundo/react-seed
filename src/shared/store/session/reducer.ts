import { createReducer } from 'typesafe-actions'

import { SessionState } from './types'
import { loginRequest, loginSuccess } from './actions'

const INITIAL_STATE: SessionState = {
  isAuthenticated: false,
  loading: false,
  error: false,
}

const loginRequestReduce = (state = INITIAL_STATE) => ({ ...state, loading: true })
const loginSuccessReduce = (state = INITIAL_STATE) => ({
  ...state,
  loading: false,
  isAuthenticated: true,
})

export const sessionReducer = createReducer(INITIAL_STATE)
  .handleAction(loginRequest, loginRequestReduce)
  .handleAction(loginSuccess, loginSuccessReduce)
