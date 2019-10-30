import React from 'react'
import { useTranslation } from 'react-i18next'

import { AppHeader, StyledLink } from './app-header.styled'
import { ROUTE_NAME } from '@shared/routes/routes-names'

interface OwnProps {
  isAuthenticated: boolean
}

export const Topbar: React.FC<OwnProps> = ({ isAuthenticated }) => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <AppHeader>
      <div>
        <StyledLink to={ROUTE_NAME.login}>{t('login:title')}</StyledLink>
        {isAuthenticated && (
          <span>
            <StyledLink to={ROUTE_NAME.dashboard}>Dashboard</StyledLink>
            <StyledLink to={ROUTE_NAME.home}>Home</StyledLink>
          </span>
        )}
      </div>
      <div>
        Choose a language:
        <button onClick={() => changeLanguage('en')}>English</button>
        <button onClick={() => changeLanguage('nl')}>Dutch</button>
      </div>
    </AppHeader>
  )
}
