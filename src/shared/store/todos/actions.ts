import { createAction, createAsyncAction } from 'typesafe-actions'

import { TODO_ACTION_TYPE, Todo } from './types'

export const createTodo = createAction(TODO_ACTION_TYPE.CREATE_TODO, action => (label: string) =>
  action({ label })
)
export const removeTodo = createAction(TODO_ACTION_TYPE.REMOVE_TODO, action => (todo: Todo) =>
  action(todo)
)

export const getTodos = createAsyncAction(
  TODO_ACTION_TYPE.GET_TODOS_REQUEST,
  TODO_ACTION_TYPE.GET_TODOS_SUCCESS,
  TODO_ACTION_TYPE.GET_TODOS_FAILURE
)<undefined, Todo[], Error>()
