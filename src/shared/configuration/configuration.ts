import { Configuration } from './configuration.model'

interface ENV {
  REACT_APP_API_ENDPOINT: string
}

const env: ENV = (process as any).env || {}

export const CONFIGURATION: Configuration = {
  todos: {
    fetchTodos: `${env.REACT_APP_API_ENDPOINT}/todos`,
    fetchUsers: `${env.REACT_APP_API_ENDPOINT}/users`,
  },
}
