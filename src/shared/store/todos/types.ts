export enum TODO_ACTION_TYPE {
  GET_TODOS_REQUEST = '@session/GET_TODOS_REQUEST',
  GET_TODOS_SUCCESS = '@session/GET_TODOS_SUCCESS',
  GET_TODOS_FAILURE = '@session/GET_TODOS_FAILURE',
  CREATE_TODO = '@session/CREATE_TODO',
  REMOVE_TODO = '@session/REMOVE_TODO',
}

export interface Todo {
  id?: number
  title: string
}

export interface TodoState {
  readonly todoList: Todo[]
}
