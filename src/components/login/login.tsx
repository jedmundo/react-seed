import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { loginRequest } from '@shared/store/session/actions'
import { StyledDiv } from './login.styled'

export const Login: React.FC = () => {
  const { t } = useTranslation()
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = () => dispatch(loginRequest(username, password))

  return (
    <div>
      <h3>{t('login:title')}</h3>
      <StyledDiv>
        {t('login:username')}: <input onChange={e => setUsername(e.target.value)} />
        {t('login:password')}: <input onChange={e => setPassword(e.target.value)} />
      </StyledDiv>
      <StyledDiv>
        Press login without credentials to see more routes:
        <button onClick={login}>Login</button>
      </StyledDiv>
      <StyledDiv>Current Redux state:</StyledDiv>
      <div>{JSON.stringify(state)}</div>
    </div>
  )
}
