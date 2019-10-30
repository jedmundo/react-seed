import axios, { AxiosResponse } from 'axios'
import { from, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { CONFIGURATION } from '@shared/configuration/configuration'

export interface User {
  id: number
  name: string
  username: string
  email: string
}

export const PlaceholderService = {
  getPlaceholders: (): Observable<User[]> =>
    from(axios.get(CONFIGURATION.todos.fetchUsers)).pipe(
      map((result: AxiosResponse) => parseTodos(result))
    ),
}

function parseTodos(result: AxiosResponse): User[] {
  return result.data.map((user: any) => ({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
  }))
}
