export const SESSION_ACTION_TYPE = {
  LOGIN_REQUEST: '@session/LOGIN_REQUEST',
  LOGIN_SUCCESS: '@session/LOGIN_SUCCESS',
  LOGIN_FAILURE: '@session/LOGIN_FAILURE',
}

export interface LoginInfo {
  username: string
  password: string
}

export interface SessionState {
  readonly isAuthenticated: boolean
  readonly loading: boolean
  readonly error: boolean
}
