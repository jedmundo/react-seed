import React, { useState } from 'react'
import { loginRequest } from '../../shared/store/session/actions'
import { useDispatch, useSelector } from 'react-redux'

export const Login: React.FC = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const login = () => dispatch(loginRequest(username, password))

  return (
    <div>
      <h3>LOGIN</h3>
      <div>
        Username: <input onChange={e => setUsername(e.target.value)} />
        Password: <input onChange={e => setPassword(e.target.value)} />
      </div>
      <button onClick={login}>Login</button>
      <div>State is {JSON.stringify(state)}</div>
    </div>
  )
}
