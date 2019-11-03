import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import Button from '@material-ui/core/Button'

import { loginRequest } from '@shared/store/session/actions'
import { StyledDiv } from './login.styled'
import { TextField } from '@material-ui/core'

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
        <TextField onChange={e => setUsername(e.target.value)} label={t('login:username')} />
        <TextField onChange={e => setPassword(e.target.value)} label={t('login:password')} />
      </StyledDiv>
      <StyledDiv>
        <p>Press login without credentials to see more routes:</p>
        <Button variant="outlined" color="primary" onClick={login}>
          {t('login:title')}
        </Button>
      </StyledDiv>
      <StyledDiv>Current Redux state:</StyledDiv>
      <code>{JSON.stringify(state)}</code>
    </div>
  )
}
