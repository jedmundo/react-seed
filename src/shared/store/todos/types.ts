export enum TODO_ACTION_TYPE {
  GET_TODOS = '@session/GET_TODOS',
  CREATE_TODO = '@session/CREATE_TODO',
  REMOVE_TODO = '@session/REMOVE_TODO',
}

export interface Todo {
  label: string
}

export interface TodoState {
  readonly todoList: Todo[]
}
