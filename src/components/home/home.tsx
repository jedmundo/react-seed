import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { TextField } from '@material-ui/core'

import { createTodo, removeTodo, getTodos } from '@shared/store/todos/actions'
import { Todo } from '@shared/store/todos/types'
import Button from '@material-ui/core/Button'
import { TodoItem, InputContainer } from './home.styled'

export const Home: React.FC = () => {
  const { t } = useTranslation()
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
      <h3>{t('home:subtitle')}</h3>
      <InputContainer>
        <TextField onChange={e => setTodo(e.target.value)} label={t('home:new')} />
        <Button variant="outlined" color="primary" onClick={addTodo}>
          {t('home:add')}
        </Button>
      </InputContainer>
      <div>
        {todoList.map((todo, index) => (
          <TodoItem key={index}>
            {todo.title}
            <Button onClick={() => deleteTodo(todo)} variant="outlined">
              {t('home:remove')}
            </Button>
          </TodoItem>
        ))}
      </div>
    </div>
  )
}
