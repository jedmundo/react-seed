import { ActionType, createReducer } from 'typesafe-actions'

import { SessionState } from './types'
import { loginRequest, loginSuccess } from './actions'
import * as Actions from './actions'

export type SessionAction = ActionType<typeof Actions>

const INITIAL_STATE: SessionState = {
  isAuthenticated: false,
  loading: false,
  error: false,
}

export const sessionReducer = createReducer<SessionState, SessionAction>(INITIAL_STATE)
  .handleAction(loginRequest, state => ({ ...state, loading: true }))
  .handleAction(loginSuccess, state => ({
    ...state,
    loading: false,
    isAuthenticated: true,
  }))
