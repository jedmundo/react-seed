import { ActionType, createReducer } from 'typesafe-actions'

import { TodoState } from './types'
import { getTodos, createTodo, removeTodo } from './actions'
import * as Actions from './actions'

export type TodoAction = ActionType<typeof Actions>

const INITIAL_STATE: TodoState = {
  todoList: [],
}

export const todosReducer = createReducer<TodoState, TodoAction>(INITIAL_STATE)
  .handleAction(getTodos, state => ({ ...state, todoList: [{ label: 'asdad' }, { label: 'ESF' }] }))
  .handleAction(createTodo, (state, action) => ({
    ...state,
    todoList: [...state.todoList, { label: action.payload.label }],
  }))
  .handleAction(removeTodo, (state, action) => ({
    ...state,
    todoList: state.todoList.filter(todo => todo.label !== action.payload.label),
  }))
