import { Epic } from 'redux-observable'
import { filter, switchMap, map, catchError } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { from, of } from 'rxjs'
import axios, { AxiosResponse } from 'axios'

import { TodoAction } from './reducer'
import { getTodos } from './actions'
import { Todo } from './types'

export const fetchTodosEpic: Epic<TodoAction> = action$ =>
  action$.pipe(
    filter(isActionOf(getTodos.request)),
    switchMap(() =>
      from(axios.get('https://jsonplaceholder.typicode.com/todos')).pipe(
        map((result: AxiosResponse) => parseTodos(result)),
        map(getTodos.success),
        catchError((message: string) => of(getTodos.failure(new Error(message))))
      )
    )
  )

function parseTodos(result: AxiosResponse): Todo[] {
  return result.data.map((todo: any) => ({
    id: todo.id,
    title: todo.title,
  }))
}
