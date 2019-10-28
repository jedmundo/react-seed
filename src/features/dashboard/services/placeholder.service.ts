import axios, { AxiosResponse } from 'axios'
import { from, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { Todo } from '../../../shared/store/todos/types'
import { CONFIGURATION } from '../../../shared/configuration/configuration'

export const PlaceholderService = {
  getPlaceholders: (): Observable<Todo[]> =>
    from(axios.get(CONFIGURATION.todos.fetchTodos)).pipe(
      map((result: AxiosResponse) => parseTodos(result))
    ),
}

function parseTodos(result: AxiosResponse): Todo[] {
  return result.data.map((todo: any) => ({
    id: todo.id,
    title: todo.title,
  }))
}
