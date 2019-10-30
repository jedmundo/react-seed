import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { loginRequest } from '../../shared/store/session/actions'

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
      <div>
        {t('login:username')}: <input onChange={e => setUsername(e.target.value)} />
        {t('login:password')}: <input onChange={e => setPassword(e.target.value)} />
      </div>
      <button onClick={login}>Login</button>
      <div>State is {JSON.stringify(state)}</div>
    </div>
  )
}
