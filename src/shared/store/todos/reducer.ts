import { ActionType, createReducer } from 'typesafe-actions'

import { TodoState } from './types'
import { createTodo, removeTodo, getTodos } from './actions'
import * as Actions from './actions'

export type TodoAction = ActionType<typeof Actions>

const INITIAL_STATE: TodoState = {
  todoList: [],
}

export const todosReducer = createReducer<TodoState, TodoAction>(INITIAL_STATE)
  .handleAction(getTodos.success, (state, action) => ({
    ...state,
    todoList: action.payload,
  }))
  .handleAction(createTodo, (state, action) => ({
    ...state,
    todoList: [...state.todoList, { title: action.payload.label }],
  }))
  .handleAction(removeTodo, (state, action) => ({
    ...state,
    todoList: state.todoList.filter(todo => todo.title !== action.payload.title),
  }))
