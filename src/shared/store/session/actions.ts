import { createAction } from 'typesafe-actions'

import { SESSION_ACTION_TYPE } from './types'

export const loginRequest = createAction(
  SESSION_ACTION_TYPE.LOGIN_REQUEST,
  action => (username: string, password: string) => action({ username, password })
)
export const loginSuccess = createAction(SESSION_ACTION_TYPE.LOGIN_SUCCESS)
// export const loginFailure = () => action(SESSION_ACTION_TYPE.LOGIN_FAILURE)
