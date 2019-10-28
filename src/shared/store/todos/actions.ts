import { createAction } from 'typesafe-actions'

import { TODO_ACTION_TYPE, Todo } from './types'

export const getTodos = createAction(TODO_ACTION_TYPE.GET_TODOS)
export const createTodo = createAction(TODO_ACTION_TYPE.CREATE_TODO, action => (label: string) =>
  action({ label })
)
export const removeTodo = createAction(TODO_ACTION_TYPE.REMOVE_TODO, action => (todo: Todo) =>
  action(todo)
)
