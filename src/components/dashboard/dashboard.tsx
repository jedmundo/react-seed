import React from 'react'
import { useObservable } from 'rxjs-hooks'
import { useTranslation } from 'react-i18next'

import { PlaceholderService } from './services/placeholder.service'

const Dashboard: React.FC = () => {
  const { t } = useTranslation()
  const users = useObservable(PlaceholderService.getPlaceholders, [])

  return (
    <>
      <h3>{t('dashboard:subtitle')}</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <div>{user.name}</div>
            <div>{user.username}</div>
            <div>{user.email}</div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Dashboard
