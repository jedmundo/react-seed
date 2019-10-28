import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { createTodo, getTodos } from '../../shared/store/todos/actions'

export const Home: React.FC = () => {
  const dispatch = useDispatch()
  const todoList = useSelector((state: any) => state.todosReducer.todoList)
  const [todo, setTodo] = useState('')

  useEffect(() => {
    dispatch(getTodos())
  }, [])

  const addTodo = () => dispatch(createTodo(todo))

  return (
    <div>
      <h3>TODOS</h3>
      <input onChange={e => setTodo(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <div>{!!todoList && JSON.stringify(todoList)}</div>
    </div>
  )
}
