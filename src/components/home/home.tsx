import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { createTodo, removeTodo, getTodos } from '../../shared/store/todos/actions'
import { Todo } from '../../shared/store/todos/types'

export const Home: React.FC = () => {
  const dispatch = useDispatch()
  const todoList: Todo[] = useSelector((state: any) => state.todosReducer.todoList)
  const [todo, setTodo] = useState('')

  useEffect(() => {
    dispatch(getTodos.request())
  }, [dispatch])

  const addTodo = useCallback(() => dispatch(createTodo(todo)), [todo, dispatch])
  const deleteTodo = useCallback((todoToRemove: Todo): any => dispatch(removeTodo(todoToRemove)), [
    dispatch,
  ])

  return (
    <div>
      <h3>TODOS</h3>
      <input onChange={e => setTodo(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <div>
        {todoList.map((todo, index) => (
          <div key={index}>
            {todo.title}
            <button onClick={() => deleteTodo(todo)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  )
}
